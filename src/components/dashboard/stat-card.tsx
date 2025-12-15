import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LucideIcon, Users, UserCheck, Book, MessageSquare, Wallet } from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  Users,
  UserCheck,
  Book,
  MessageSquare,
  Wallet,
};

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  icon: string;
};

export function StatCard({ title, value, change, icon }: StatCardProps) {
  const IconComponent = iconMap[icon];
  const isPositive = change.startsWith('+');

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {IconComponent && <IconComponent className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p
          className={`text-xs ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {change} from last month
        </p>
      </CardContent>
    </Card>
  );
}
