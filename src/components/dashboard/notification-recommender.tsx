'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { getRecommendations } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Wand2, Clock, MessageCircle, GitBranch } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const initialState = {
  message: '',
  data: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Getting Recommendations...' : 'Get Recommendations'}
      <Sparkles className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function NotificationRecommender() {
  const [state, formAction] = useActionState(getRecommendations, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'error' && state.errors) {
      // You can handle displaying errors here
    } else if (state.message === 'success') {
      toast({
        title: 'Recommendations Ready!',
        description: 'AI has generated notification suggestions for you.',
      });
    }
  }, [state, toast]);

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <div className="flex items-center gap-2">
            <Wand2 className="h-6 w-6 text-primary" />
            <CardTitle>Intelligent Notification Recommendations</CardTitle>
        </div>
        <CardDescription>
          Let AI suggest the best time and content for your notifications based on historical data.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="targetGroup">Target Group</Label>
              <Select name="targetGroup" required>
                <SelectTrigger id="targetGroup">
                  <SelectValue placeholder="Select a group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="students">Students</SelectItem>
                  <SelectItem value="teachers">Teachers</SelectItem>
                  <SelectItem value="parents">Parents</SelectItem>
                  <SelectItem value="specific classes">Specific Classes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notificationGoal">Notification Goal</Label>
              <Textarea
                id="notificationGoal"
                name="notificationGoal"
                placeholder="e.g., Increase attendance for the school's science fair."
                required
                className="min-h-[40px]"
              />
            </div>
          </div>
          {state.message !== 'success' && <SubmitButton />}
        </CardContent>
      </form>

      {useFormStatus().pending && (
        <CardFooter className='flex flex-col items-start gap-4'>
            <Skeleton className='h-8 w-1/4' />
            <div className='space-y-2 w-full'>
                <Skeleton className='h-4 w-1/5' />
                <Skeleton className='h-10 w-full' />
            </div>
            <div className='space-y-2 w-full'>
                <Skeleton className='h-4 w-1/5' />
                <Skeleton className='h-10 w-full' />
            </div>
            <div className='space-y-2 w-full'>
                <Skeleton className='h-4 w-1/5' />
                <Skeleton className='h-10 w-full' />
            </div>
        </CardFooter>
      )}

      {state.message === 'success' && state.data && (
        <CardFooter className="flex-col items-start gap-6 rounded-b-lg bg-muted/50 p-6">
            <h3 className="text-lg font-semibold text-foreground">AI Recommendations</h3>
            <div className="grid gap-4 w-full">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                        <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-semibold">Optimal Timing</h4>
                        <p className="text-muted-foreground">{state.data.optimalTiming}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                        <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-semibold">Suggested Content</h4>
                        <p className="text-muted-foreground">{state.data.suggestedContent}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                        <GitBranch className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-semibold">Reasoning</h4>
                        <p className="text-muted-foreground">{state.data.reasoning}</p>
                    </div>
                </div>
            </div>
            <Button variant="outline" className="w-full" onClick={() => window.location.reload()}>
                Start Over
            </Button>
        </CardFooter>
      )}
    </Card>
  );
}
