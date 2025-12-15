import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Wand2 } from 'lucide-react';

export default function TimetablePage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">AI Timetable Generator</h1>
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Wand2 className="h-6 w-6 text-primary" />
            <CardTitle>Generate a New Timetable</CardTitle>
          </div>
          <CardDescription>
            Provide the necessary details and let AI create an optimized weekly timetable for your school.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="teachers">Teachers & Subjects</Label>
                <Textarea
                  id="teachers"
                  placeholder="e.g., Mr. Adewale: Mathematics, Physics\nMrs. Okoro: English, Literature"
                  className="h-32"
                />
                 <p className="text-xs text-muted-foreground">
                  List each teacher and the subjects they teach.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="classes">Classes & Subjects</Label>
                <Textarea
                  id="classes"
                  placeholder="e.g., JSS 1: Mathematics, English, Basic Science\nSSS 2: Physics, Chemistry, Biology"
                  className="h-32"
                />
                 <p className="text-xs text-muted-foreground">
                  List each class and the subjects they need.
                </p>
              </div>
            </div>
             <div className="space-y-2">
              <Label htmlFor="constraints">Constraints</Label>
              <Textarea
                id="constraints"
                placeholder="e.g., School hours: 8am - 3pm\nNo classes on Wednesday afternoons\nSSS 1 has assembly on Monday morning"
                className="h-24"
              />
              <p className="text-xs text-muted-foreground">
                  Add any specific rules, holidays, or fixed events.
                </p>
            </div>
            <Button type="submit">
              Generate Timetable
            </Button>
          </form>
        </CardContent>
      </Card>
      {/* The generated timetable will be displayed here */}
    </div>
  );
}
