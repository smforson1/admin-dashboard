import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

export default function TeachersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Teacher Management</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Teacher
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Teachers List</CardTitle>
          <CardDescription>Manage teacher profiles, class assignments, and permissions.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">The teacher management interface will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
