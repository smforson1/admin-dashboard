import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

export default function MockExamsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Mock Exam Management</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Create Mock Exam
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Mock Exams</CardTitle>
          <CardDescription>Manage mock exams, eligible classes, and exam status.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">The mock exam management interface will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
