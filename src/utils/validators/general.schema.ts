import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema, validateEmail } from '@/utils/validators/common-rules';
import { iranianPhoneNumber } from '@/const/regex.constant';

// form zod validation schema
export const generalFormSchema = z.object({
  name: z.string().min(1, { message: messages.nameRequired }),
  TrackingCode: z.string().min(1, { message: messages.trackingCodeRequired }),
  phoneNumber: z
    .string()
    .min(1, { message: messages.phoneNumberRequired })
    .regex(new RegExp(iranianPhoneNumber), {
      message: messages.phoneNumber,
    }),
  nationalCode: z.string().min(1, { message: messages.phoneNumberRequired }),
  email: validateEmail,
  password: z.string().min(1, { message: messages.passwordRequired }),
  bank: z.string().min(1, { message: messages.bankRequired }),
  // startDate: z.string(),
  userInfo: z.array(fileSchema).optional(),
});

// generate form types from zod validation schema
export type GeneralFormTypes = z.infer<typeof generalFormSchema>;

export const defaultValues = {
  name: '',
  TrackingCode: '',
  phoneNumber: '',
  nationalCode: '',
  email: '',
  password: '',
  bank: undefined,
  // startDate: undefined,
  userInfo: undefined,
};
