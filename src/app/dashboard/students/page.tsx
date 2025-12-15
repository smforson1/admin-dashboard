'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { mockStudents } from '@/lib/data';

const statusVariantMap: { [key: string]: "default" | "secondary" | "destructive" } = {
  Active: 'default',
  Suspended: 'destructive',
  Withdrawn: 'secondary',
};

export default function StudentsPage() {
  const router = useRouter();

  const handleRowClick = (studentId: string) => {
    router.push(`/dashboard/students/${studentId}`);
  };

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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Parent Name</TableHead>
                <TableHead>Admission Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockStudents.map((student) => (
                <TableRow key={student.id} onClick={() => handleRowClick(student.id)} className="cursor-pointer">
                  <TableCell>{student.id}</TableCell>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.parentName}</TableCell>
                  <TableCell>{student.admissionDate}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariantMap[student.status] || 'default'}>{student.status}</Badge>
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
