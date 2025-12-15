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
    value: '₦1,250,000',
    change: '+₦50,000',
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
