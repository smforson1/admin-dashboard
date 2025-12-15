import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

export default function StudentsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Student Management</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Student
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Students List</CardTitle>
          <CardDescription>View, edit, and manage student profiles and records.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">The student management interface will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
