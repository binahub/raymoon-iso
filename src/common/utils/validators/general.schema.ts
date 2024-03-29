import { z } from 'zod';
import { messages } from '@/common/config/messages';
import { fileSchema, validateEmail } from '@/common/utils/validators/common-rules';
import { iranianPhoneNumber } from '@/common/const/regex.constant';
import { passwordlengthChecker } from '@/common/utils/password-length-checker';
import { containPersianCharacters } from '@/common/utils/persian-character-helper';

// form zod validation schema
export const generalFormSchema = z.object({
  name: z.string().min(1, { message: messages.nameRequired }),
  description: z.string().min(1, { message: messages.descriptionRequired }),
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
  startDate: z.string().min(1, { message: messages.nameRequired }),
  newPassword: z
    .string()
    .min(1, { message: 'ضروری' })
    .max(8, { message: 'رمز عبور می بایست حداقل 8 کاراکتر باشد.' })
    .refine((value) => !containPersianCharacters(value), {
      message: 'رمز عبور نمی تواند شامل حروف فارسی باشد.',
    })
    .refine((value: any) => passwordlengthChecker(value).total >= 100, {
      message: 'رمز عبور شما می بایست دارای حروف بزرگ و کوچک، اعداد و علائم اختصاری (@$%...) باشد.',
    }),

  // userInfo: z.array(fileSchema)
  userInfo: z.any()
});

// generate form types from zod validation schema
export type GeneralFormTypes = z.infer<typeof generalFormSchema>;

export const defaultValues = {
  name: '',
  description: '',
  phoneNumber: '',
  nationalCode: '',
  email: '',
  password: '',
  bank: undefined,
  // startDate: "",
  newPassword:'',
  userInfo: [],
};
