'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, LineChart, Line, CartesianGrid, Pie, PieChart, Cell } from 'recharts';
import {
    ChartContainer,
    ChartTooltipContent,
  } from "@/components/ui/chart"
import { chartConfig } from '@/lib/data';

type WeeklyActivityChartProps = {
  data: any[];
};

export function WeeklyActivityChart({ data }: WeeklyActivityChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip
            contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
            }}
        />
        <Legend />
        <Line type="monotone" dataKey="activity" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="logins" stroke="hsl(var(--accent))" />
      </LineChart>
    </ResponsiveContainer>
  );
}


type UserLoginsChartProps = {
    data: any[];
  };
  
export function UserLoginsChart({ data }: UserLoginsChartProps) {
    return (
        <ChartContainer config={{}} className="min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height={350}>
            <PieChart>
            <Tooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
            />
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                strokeWidth={5}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
            </Pie>
            <Legend />
            </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    );
}