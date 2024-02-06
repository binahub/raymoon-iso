import { messages } from '@/config/messages';
import { z } from 'zod';

// form zod validation schema
export const datePickerSchema = z.object({
  startDate: z.string().min(1, { message: messages.startDateIsRequired }),
});

// generate form types from zod validation schema
export type DatePickerSchema = z.infer<typeof datePickerSchema>;
