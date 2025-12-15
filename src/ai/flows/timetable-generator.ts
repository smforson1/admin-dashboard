'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a school timetable.
 *
 * - `generateTimetable` - A function that takes teachers, classes, and constraints, then returns a structured timetable.
 * - `TimetableInput` - The input type for the generateTimetable function.
 * - `TimetableOutput` - The output type for the generateTimetable function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const TimetableInputSchema = z.object({
  teachers: z.string().describe('A list of teachers and the subjects they are qualified to teach. e.g., "Mr. Jones: Math, Physics; Mrs. Davis: English"'),
  classes: z.string().describe('A list of classes and the subjects required for each. e.g., "Grade 10A: Math, English, Science; Grade 11B: History, Art"'),
  constraints: z.string().describe('A list of constraints and rules for the timetable, such as school hours, break times, teacher availability, and fixed events. e.g., "School hours are 9am to 3pm. Lunch break is at 12pm for 1 hour. Mr. Jones is unavailable on Friday afternoons."'),
});
export type TimetableInput = z.infer<typeof TimetableInputSchema>;

const TimeSlotSchema = z.object({
    subject: z.string().describe("The subject being taught."),
    teacher: z.string().describe("The teacher for the class."),
    class: z.string().describe("The class/grade attending the session."),
});

export const TimetableOutputSchema = z.object({
  timetable: z.record( // Days of the week
    z.string(),
    z.record( // Time slots (e.g., "09:00-10:00")
      z.string(),
      z.array(TimeSlotSchema).describe("List of classes happening at this time slot. Can be multiple for different classes.")
    )
  ).describe("The generated weekly timetable structure. The keys for the outer object are days of the week (e.g., 'Monday'). The keys for the inner object are time slots (e.g., '09:00 - 10:00')."),
  warnings: z.array(z.string()).optional().describe("A list of any constraints that could not be met or potential issues with the generated timetable."),
});
export type TimetableOutput = z.infer<typeof TimetableOutputSchema>;

export async function generateTimetable(input: TimetableInput): Promise<TimetableOutput> {
  return timetableFlow(input);
}

const timetablePrompt = ai.definePrompt({
  name: 'timetablePrompt',
  input: { schema: TimetableInputSchema },
  output: { schema: TimetableOutputSchema },
  prompt: `You are an expert AI assistant that creates school timetables. Your task is to generate a weekly schedule based on the provided lists of teachers, classes, and constraints.

  **Instructions:**
  1.  **Adhere to all constraints strictly.** This includes school hours, break times, and teacher availability.
  2.  **Assign qualified teachers** to each subject for each class.
  3.  **Avoid conflicts:** Do not schedule the same teacher or the same class for two different subjects at the same time.
  4.  **Fill the schedule:** Try to create a balanced and complete schedule for the entire week (Monday to Friday).
  5.  **Output Format:** Structure the output as a JSON object that adheres to the provided schema. The top-level keys should be the days of the week. Each day should contain time slots as keys.
  6.  **Handle Issues:** If any constraints cannot be met, or if there are any other problems, add a clear description of the issue to the 'warnings' array in the output.

  **Input Data:**

  **Teachers and their Subjects:**
  {{{teachers}}}

  **Classes and their Subjects:**
  {{{classes}}}

  **Constraints and Rules:**
  {{{constraints}}}

  Now, generate the timetable.
  `,
});

const timetableFlow = ai.defineFlow(
  {
    name: 'timetableFlow',
    inputSchema: TimetableInputSchema,
    outputSchema: TimetableOutputSchema,
  },
  async (input) => {
    const { output } = await timetablePrompt(input);
    return output!;
  }
);
