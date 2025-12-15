import { stats, weeklyActivityData, userLoginsData } from '@/lib/data';
import { StatCard } from '@/components/dashboard/stat-card';
import { WeeklyActivityChart, UserLoginsChart } from '@/components/dashboard/charts';
import { NotificationRecommender } from '@/components/dashboard/notification-recommender';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>Weekly System Activity</CardTitle>
            <CardDescription>A summary of system logins and general activity.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <WeeklyActivityChart data={weeklyActivityData} />
          </CardContent>
        </Card>
        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>User Logins</CardTitle>
            <CardDescription>Distribution of logins by user type.</CardDescription>
          </CardHeader>
          <CardContent>
            <UserLoginsChart data={userLoginsData} />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <NotificationRecommender />
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
            <CardDescription>A list of the latest transactions.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Recent payments will be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
