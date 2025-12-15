import type { NotificationRecommendationsInput } from "@/ai/flows/intelligent-notification-recommendations";

export const stats = [
  {
    title: 'Total Students',
    value: '1,250',
    change: '+15.2%',
    icon: 'Users',
  },
  {
    title: 'Total Teachers',
    value: '82',
    change: '+5.8%',
    icon: 'UserCheck',
  },
  {
    title: 'Total Classes',
    value: '45',
    change: '+2.1%',
    icon: 'Book',
  },
  {
    title: 'SMS Credits',
    value: '5,430',
    change: '-100',
    icon: 'MessageSquare',
  },
  {
    title: 'Paystack Balance',
    value: 'GH₵1,250,000',
    change: '+GH₵50,000',
    icon: 'Wallet',
  },
];

export const weeklyActivityData = [
  { date: 'Mon', logins: 120, activity: 200 },
  { date: 'Tue', logins: 150, activity: 220 },
  { date: 'Wed', logins: 180, activity: 250 },
  { date: 'Thu', logins: 160, activity: 240 },
  { date: 'Fri', logins: 200, activity: 280 },
  { date: 'Sat', logins: 80, activity: 150 },
  { date: 'Sun', logins: 70, activity: 140 },
];

export const userLoginsData = [
    { name: 'Students', value: 400, fill: "var(--color-chart-1)" },
    { name: 'Teachers', value: 150, fill: "var(--color-chart-2)" },
    { name: 'Parents', value: 250, fill: "var(--color-chart-3)" },
    { name: 'Admins', value: 50, fill: "var(--color-chart-5)" },
];


export const chartConfig = {
    logins: {
      label: 'Logins',
      color: 'hsl(var(--chart-1))',
    },
    activity: {
      label: 'Activity',
      color: 'hsl(var(--chart-2))',
    },
  };

export const mockNotificationHistory: NotificationRecommendationsInput['pastNotifications'] = [
    {
      timestamp: '2024-05-20T09:00:00Z',
      targetGroup: 'parents',
      content: 'Reminder: Parent-Teacher meetings this Friday. Please book your slots.',
      engagementMetrics: { views: 800, clicks: 150 },
    },
    {
      timestamp: '2024-05-21T14:30:00Z',
      targetGroup: 'students',
      content: 'The school library will be closed tomorrow for maintenance.',
      engagementMetrics: { views: 1100, clicks: 50 },
    },
    {
      timestamp: '2024-05-22T18:00:00Z',
      targetGroup: 'teachers',
      content: 'Staff meeting on Monday at 8 AM to discuss the new curriculum.',
      engagementMetrics: { views: 80, clicks: 65 },
    },
    {
      timestamp: '2024-05-23T11:00:00Z',
      targetGroup: 'specific classes',
      content: 'Class 10A: Your science project submission deadline has been extended to next Wednesday.',
      engagementMetrics: { views: 90, clicks: 75 },
    },
  ];

  export const mockStudents = [
    { id: 'STU-001', name: 'John Doe', class: 'JSS 1', parentName: 'Jane Doe', admissionDate: '2023-09-01', status: 'Active', imageUrl: 'https://picsum.photos/seed/1/200/200', dob: '2010-05-12', gender: 'Male', address: '123 School Lane, Accra', parentContact: '024 123 4567', parentEmail: 'jane.doe@example.com' },
    { id: 'STU-002', name: 'Mary Smith', class: 'SSS 2', parentName: 'Peter Smith', admissionDate: '2022-09-01', status: 'Active', imageUrl: 'https://picsum.photos/seed/2/200/200', dob: '2007-08-22', gender: 'Female', address: '456 Education Ave, Kumasi', parentContact: '020 987 6543', parentEmail: 'peter.smith@example.com' },
    { id: 'STU-003', name: 'David Johnson', class: 'JSS 3', parentName: 'Anne Johnson', admissionDate: '2021-09-01', status: 'Suspended', imageUrl: 'https://picsum.photos/seed/3/200/200', dob: '2008-11-30', gender: 'Male', address: '789 Knowledge Blvd, Accra', parentContact: '055 555 1234', parentEmail: 'anne.j@example.com' },
    { id: 'STU-004', name: 'Emily Williams', class: 'SSS 1', parentName: 'Chris Williams', admissionDate: '2023-09-01', status: 'Active', imageUrl: 'https://picsum.photos/seed/4/200/200', dob: '2008-02-15', gender: 'Female', address: '101 Learning Rd, Cape Coast', parentContact: '027 111 2222', parentEmail: 'chris.w@example.com' },
    { id: 'STU-005', name: 'Michael Brown', class: 'JSS 2', parentName: 'Sarah Brown', admissionDate: '2022-09-01', status: 'Withdrawn', imageUrl: 'https://picsum.photos/seed/5/200/200', dob: '2009-07-07', gender: 'Male', address: '222 Wisdom Street, Takoradi', parentContact: '026 333 4444', parentEmail: 'sarah.b@example.com' },
  ];
  
  export const mockTeachers = [
    { id: 'TCH-001', name: 'Mr. Adewale', subject: 'Mathematics', contact: '08012345678', employmentDate: '2020-08-15', status: 'Active', imageUrl: 'https://picsum.photos/seed/101/200/200', email: 'mr.adewale@schoolwise.com', address: '1 Teacher\'s Quarters, Accra', qualifications: 'B.Sc. Mathematics, M.Ed.' },
    { id: 'TCH-002', name: 'Mrs. Okoro', subject: 'English', contact: '08023456789', employmentDate: '2018-09-20', status: 'Active', imageUrl: 'https://picsum.photos/seed/102/200/200', email: 'mrs.okoro@schoolwise.com', address: '2 Staff Village, Kumasi', qualifications: 'B.A. English, PGDE' },
    { id: 'TCH-003', name: 'Dr. Bello', subject: 'Physics', contact: '08034567890', employmentDate: '2022-01-10', status: 'On Leave', imageUrl: 'https://picsum.photos/seed/103/200/200', email: 'dr.bello@schoolwise.com', address: '3 Faculty Lane, Cape Coast', qualifications: 'Ph.D. Physics' },
    { id: 'TCH-004', name: 'Ms. Chukwu', subject: 'Chemistry', contact: '08045678901', employmentDate: '2021-05-01', status: 'Active', imageUrl: 'https://picsum.photos/seed/104/200/200', email: 'ms.chukwu@schoolwise.com', address: '4 Academic Way, Accra', qualifications: 'B.Sc. Chemistry, M.Sc. Inorganic Chemistry' },
  ];

export const mockClasses = [
  { name: 'JSS 1', teacher: 'Mr. Adewale', students: 45, subClasses: ['A', 'B', 'C'] },
  { name: 'JSS 2', teacher: 'Mrs. Okoro', students: 42, subClasses: ['A', 'B'] },
  { name: 'SSS 1', teacher: 'Dr. Bello', students: 38, subClasses: ['Science', 'Arts', 'Commercial'] },
  { name: 'SSS 2', teacher: 'Ms. Chukwu', students: 35, subClasses: ['Science', 'Arts', 'Commercial'] },
];

export const mockPayments = [
  { transactionId: 'PAY-001', studentId: 'STU-001', amount: 'GH₵75,000', date: '2024-05-01', status: 'Paid', purpose: 'School Fees' },
  { transactionId: 'PAY-002', studentId: 'STU-002', amount: 'GH₵5,000', date: '2024-05-02', status: 'Paid', purpose: 'Voucher' },
  { transactionId: 'PAY-003', studentId: 'STU-003', amount: 'GH₵75,000', date: '2024-05-03', status: 'Pending', purpose: 'School Fees' },
  { transactionId: 'PAY-004', studentId: 'STU-004', amount: 'GH₵10,000', date: '2024-05-04', status: 'Failed', purpose: 'Exam Fee' },
];

export const mockSentNotifications = [
  { id: 'NOTIF-001', date: '2024-05-28', targetGroup: 'Parents', subject: 'Mid-term Break Announcement', status: 'Sent' },
  { id: 'NOTIF-002', date: '2024-05-27', targetGroup: 'Teachers', subject: 'Staff Professional Development', status: 'Sent' },
  { id: 'NOTIF-003', date: '2024-05-25', targetGroup: 'Students', subject: 'Upcoming Sports Gala', status: 'Sent' },
  { id: 'NOTIF-004', date: '2024-05-22', targetGroup: 'All', subject: 'Important Security Update', status: 'Sent' },
  { id: 'NOTIF-005', date: '2024-05-20', targetGroup: 'Parents', subject: 'School Fees Reminder', status: 'Failed' },
  { id: 'NOTIF-006', date: '2024-05-19', targetGroup: 'Students', subject: 'Career Day', status: 'Draft' },
];
