import { z } from 'zod';

// form zod validation schema

export const foodSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: 'ضروری' }),
  description: z.string().min(1, { message: 'ضروری' }),
});


export const foodInquirySchema = z.object({
  name: z.string().min(1, { message: 'ضروری' }),
  description: z.string().min(1, { message: 'ضروری' }),
});

// generate form types from zod validation schema
export type FoodSchema = z.infer<typeof foodSchema>;

export type FoodInquirySchema = z.infer<typeof foodInquirySchema>;
