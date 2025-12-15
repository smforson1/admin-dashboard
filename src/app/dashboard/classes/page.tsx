import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { mockClasses } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ClassesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Class Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Class
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Class</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new class.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Class Name
                </Label>
                <Input id="name" placeholder="e.g. JSS 1" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="teacher" className="text-right">
                  Class Teacher
                </Label>
                <Input id="teacher" placeholder="e.g. Mr. Adewale" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="students" className="text-right">
                  No. of Students
                </Label>
                <Input id="students" type="number" placeholder="e.g. 45" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Class</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
