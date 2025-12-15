'use server';

import {
  getNotificationRecommendations,
  type NotificationRecommendationsInput,
} from '@/ai/flows/intelligent-notification-recommendations';
import { z } from 'zod';
import { mockNotificationHistory } from '@/lib/data';

const formSchema = z.object({
  targetGroup: z.enum(['students', 'teachers', 'parents', 'specific classes']),
  notificationGoal: z.string().min(10, 'Please describe the goal in at least 10 characters.'),
});

export async function getRecommendations(prevState: any, formData: FormData) {
  try {
    const validatedFields = formSchema.safeParse({
      targetGroup: formData.get('targetGroup'),
      notificationGoal: formData.get('notificationGoal'),
    });

    if (!validatedFields.success) {
      return {
        message: 'Invalid form data.',
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const input: NotificationRecommendationsInput = {
      ...validatedFields.data,
      pastNotifications: mockNotificationHistory,
    };

    const recommendations = await getNotificationRecommendations(input);

    return {
      message: 'success',
      data: recommendations,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}
