'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Book,
  FileText,
  ClipboardCheck,
  CreditCard,
  Bell,
  Gem,
  CalendarDays,
} from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/students', icon: Users, label: 'Students' },
  { href: '/dashboard/teachers', icon: UserCheck, label: 'Teachers' },
  { href: '/dashboard/classes', icon: Book, label: 'Classes' },
  { href: '/dashboard/assessments', icon: FileText, label: 'Assessments' },
  { href: '/dashboard/mocks', icon: ClipboardCheck, label: 'Mock Exams' },
  { href: '/dashboard/payments', icon: CreditCard, label: 'Payments' },
  { href: '/dashboard/notifications', icon: Bell, label: 'Notifications' },
  { href: '/dashboard/timetable', icon: CalendarDays, label: 'Timetable' },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <Gem className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-semibold">SchoolWise</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  className={cn(
                    'justify-start',
                    pathname === item.href &&
                      'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
                  )}
                  asChild
                >
                  <div>
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </div>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
