import { NextResponse } from 'next/server';
import { mockStudents, mockTeachers, mockClasses, mockPayments } from '@/lib/data';

const allMockData: { [key: string]: any[] } = {
  students: mockStudents,
  teachers: mockTeachers,
  classes: mockClasses,
  payments: mockPayments,
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const entity = searchParams.get('entity');

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (entity && allMockData[entity]) {
    return NextResponse.json(allMockData[entity]);
  }

  return NextResponse.json({ error: 'Invalid entity type' }, { status: 400 });
}
