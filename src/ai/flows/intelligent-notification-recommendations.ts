'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing intelligent notification recommendations.
 *
 * - `getNotificationRecommendations` -  A function that takes target group and past notification data, then returns
 *    suggestions for optimal notification timing and content.
 *
 * - `NotificationRecommendationsInput` - The input type for the getNotificationRecommendations function.
 *
 * - `NotificationRecommendationsOutput` - The output type for the getNotificationRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TargetGroupSchema = z.enum(['students', 'teachers', 'parents', 'specific classes']);

const NotificationHistorySchema = z.array(
  z.object({
    timestamp: z.string().describe('The timestamp of the notification.'),
    targetGroup: TargetGroupSchema.describe('The target group of the notification.'),
    content: z.string().describe('The content of the notification.'),
    engagementMetrics: z
      .object({
        views: z.number().describe('The number of views the notification received.'),
        clicks: z.number().describe('The number of clicks the notification received.'),
        // Add more engagement metrics as needed
      })
      .optional(),
  })
);

const NotificationRecommendationsInputSchema = z.object({
  targetGroup: TargetGroupSchema.describe('The target group for the notification.'),
  notificationGoal: z.string().describe('The goal of the notification (e.g., increase attendance).'),
  pastNotifications: NotificationHistorySchema.describe(
    'The history of past notifications, including their content, target group, and engagement metrics.'
  ),
});
export type NotificationRecommendationsInput = z.infer<typeof NotificationRecommendationsInputSchema>;

const NotificationRecommendationsOutputSchema = z.object({
  optimalTiming: z
    .string()
    .describe(
      'The suggested optimal timing for the notification, including day of the week and time of day.'
    ),
  suggestedContent: z.string().describe('The suggested content for the notification.'),
  reasoning: z
    .string()
    .describe(
      'The reasoning behind the suggested timing and content, based on the analysis of historical data.'
    ),
});
export type NotificationRecommendationsOutput = z.infer<typeof NotificationRecommendationsOutputSchema>;

export async function getNotificationRecommendations(
  input: NotificationRecommendationsInput
): Promise<NotificationRecommendationsOutput> {
  return notificationRecommendationsFlow(input);
}

const notificationRecommendationsPrompt = ai.definePrompt({
  name: 'notificationRecommendationsPrompt',
  input: {schema: NotificationRecommendationsInputSchema},
  output: {schema: NotificationRecommendationsOutputSchema},
  prompt: `You are an AI assistant designed to provide intelligent notification recommendations for a school management system.

  Analyze the following historical notification data and suggest the optimal timing and content for a new notification to the specified target group.

  Target Group: {{{targetGroup}}}
  Notification Goal: {{{notificationGoal}}}

  Past Notifications:
  {{#each pastNotifications}}
  - Timestamp: {{{timestamp}}}, Target Group: {{{targetGroup}}}, Content: {{{content}}}
  {{#if engagementMetrics}}
  Engagement Metrics: Views: {{{engagementMetrics.views}}}, Clicks: {{{engagementMetrics.clicks}}}
  {{/if}}
  {{/each}}

  Consider the goal of the notification and historical engagement metrics to suggest the best time and content to maximize impact. Explain your reasoning.

  Output your response using JSON format.
  `,
});

const notificationRecommendationsFlow = ai.defineFlow(
  {
    name: 'notificationRecommendationsFlow',
    inputSchema: NotificationRecommendationsInputSchema,
    outputSchema: NotificationRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await notificationRecommendationsPrompt(input);
    return output!;
  }
);
