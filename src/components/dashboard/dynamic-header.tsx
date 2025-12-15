'use client';

import dynamic from 'next/dynamic';

const DynamicDashboardHeader = dynamic(() => import('./header').then(mod => mod.DashboardHeader), {
    ssr: false,
});

export default function DynamicHeader() {
  return <DynamicDashboardHeader />;
}
