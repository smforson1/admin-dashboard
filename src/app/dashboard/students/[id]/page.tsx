import { mockStudents } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function StudentProfilePage({ params }: { params: { id: string } }) {
  const student = mockStudents.find((s) => s.id === params.id);

  if (!student) {
    return <div>Student not found</div>;
  }
  
  const statusVariantMap: { [key: string]: "default" | "secondary" | "destructive" } = {
    Active: 'default',
    Suspended: 'destructive',
    Withdrawn: 'secondary',
  };


  return (
    <div>
        <Button asChild variant="outline" className="mb-4">
            <Link href="/dashboard/students">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Students List
            </Link>
        </Button>
        <Card>
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={student.imageUrl} alt={student.name} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-3xl">{student.name}</CardTitle>
                        <CardDescription className="text-lg">Student ID: {student.id}</CardDescription>
                        <div className="mt-2">
                             <Badge variant={statusVariantMap[student.status] || 'default'}>{student.status}</Badge>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Date of Birth</p>
                            <p>{student.dob}</p>
                        </div>
                         <div>
                            <p className="text-sm text-muted-foreground">Gender</p>
                            <p>{student.gender}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Address</p>
                            <p>{student.address}</p>
                        </div>
                    </div>
                </div>
                 <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Academic Information</h3>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Class</p>
                            <p>{student.class}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Admission Date</p>
                            <p>{student.admissionDate}</p>
                        </div>
                    </div>
                </div>
                 <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Guardian Information</h3>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Parent Name</p>
                            <p>{student.parentName}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Parent Contact</p>
                            <p>{student.parentContact}</p>
                        </div>
                         <div>
                            <p className="text-sm text-muted-foreground">Parent Email</p>
                            <p>{student.parentEmail}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
