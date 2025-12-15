import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { mockClasses } from '@/lib/data';

export default function ClassesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Class Management</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Class
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Classes List</CardTitle>
          <CardDescription>Manage classes, sub-classes, and their assignments.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class Name</TableHead>
                <TableHead>Class Teacher</TableHead>
                <TableHead>No. of Students</TableHead>
                <TableHead>Sub-classes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockClasses.map((klass) => (
                <TableRow key={klass.name}>
                  <TableCell className="font-medium">{klass.name}</TableCell>
                  <TableCell>{klass.teacher}</TableCell>
                  <TableCell>{klass.students}</TableCell>
                  <TableCell className="flex gap-1">
                    {klass.subClasses.map(sub => <Badge key={sub} variant="secondary">{sub}</Badge>)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}