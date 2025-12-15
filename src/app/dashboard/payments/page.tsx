import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function PaymentsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Voucher & Payment Management</h1>
        <Button>
          <Settings className="mr-2 h-4 w-4" /> Set Prices
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Track all payments and view transaction details.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">The payment tracking interface will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
