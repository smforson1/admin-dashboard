import { mockTeachers } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TeacherProfilePage({ params }: { params: { id: string } }) {
  const teacher = mockTeachers.find((t) => t.id === params.id);

  if (!teacher) {
    return <div>Teacher not found</div>;
  }
  
  const statusVariantMap: { [key: string]: "default" | "secondary" | "destructive" } = {
    Active: 'default',
    'On Leave': 'secondary',
  };


  return (
    <div>
        <Button asChild variant="outline" className="mb-4">
            <Link href="/dashboard/teachers">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Teachers List
            </Link>
        </Button>
        <Card>
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={teacher.imageUrl} alt={teacher.name} />
                        <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-3xl">{teacher.name}</CardTitle>
                        <CardDescription className="text-lg">Teacher ID: {teacher.id}</CardDescription>
                         <div className="mt-2">
                             <Badge variant={statusVariantMap[teacher.status] || 'default'}>{teacher.status}</Badge>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Contact Information</h3>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{teacher.contact}</span>
                        </div>
                         <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{teacher.email}</span>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground mt-2">Address</p>
                            <p>{teacher.address}</p>
                        </div>
                    </div>
                </div>
                 <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Professional Information</h3>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Subject</p>
                            <p>{teacher.subject}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Employment Date</p>
                            <p>{teacher.employmentDate}</p>
                        </div>
                        <div className='col-span-2'>
                            <p className="text-sm text-muted-foreground">Qualifications</p>
                            <p>{teacher.qualifications}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
