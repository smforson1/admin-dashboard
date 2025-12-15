export type Student = {
    id: string;
    name: string;
    class: string;
    parentName: string;
    admissionDate: string;
    status: 'Active' | 'Suspended' | 'Withdrawn';
    imageUrl: string;
    dob: string;
    gender: 'Male' | 'Female';
    address: string;
    parentContact: string;
    parentEmail: string;
};
  
export type Teacher = {
    id: string;
    name: string;
    subject: string;
    contact: string;
    employmentDate: string;
    status: 'Active' | 'On Leave';
    imageUrl: string;
    email: string;
    address: string;
    qualifications: string;
};

export type Class = {
    name: string;
    teacher: string;
    students: number;
    subClasses: string[];
};

export type Payment = {
    transactionId: string;
    studentId: string;
    amount: string;
    date: string;
    status: 'Paid' | 'Pending' | 'Failed';
    purpose: string;
};

export type SentNotification = {
    id: string;
    date: string;
    targetGroup: string;
    subject: string;
    status: 'Sent' | 'Draft' | 'Failed';
};
