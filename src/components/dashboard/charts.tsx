'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, LineChart, Line, CartesianGrid, Pie, PieChart, Cell } from 'recharts';
import {
    ChartContainer,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
    ChartConfig,
  } from "@/components/ui/chart"

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
    chartConfig: ChartConfig;
  };
  
export function UserLoginsChart({ data, chartConfig }: UserLoginsChartProps) {
    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height={350}>
            <PieChart>
            <Tooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel nameKey="name" />}
            />
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                strokeWidth={5}
                labelKey='name'
            >
                 {data.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={entry.fill}
                    className="focus:outline-none"
                  />
                ))}
            </Pie>
            <ChartLegend content={<ChartLegendContent nameKey="name" />} />
            </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    );
}
