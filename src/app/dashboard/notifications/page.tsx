import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Notification Management</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Send Notification
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Notification History</CardTitle>
          <CardDescription>Create, send, and manage notifications to various target groups.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">The notification management interface will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
