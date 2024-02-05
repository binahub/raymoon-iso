'use client';

import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import { SubmitHandler, Controller } from 'react-hook-form';
import { PiClock, PiEnvelopeSimple } from 'react-icons/pi';
import { Form } from '@/components/ui/form';
import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import Spinner from '@/components/ui/spinner';
import Select from '@/components/ui/select';
import { Datepicker } from 'shafa-bo';

// import {
//   defaultValues,
//   personalInfoFormSchema,
//   PersonalInfoFormTypes,
// } from '@/utils/validators/personal-info.schema';
import {
  defaultValues,
  generalFormSchema,
  GeneralFormTypes,
} from '@/utils/validators/general.schema';
import UploadZone from '@/components/ui/file-upload/upload-zone';
import { countries, roles, timezones } from '@/data/forms/my-details';
import AvatarUpload from '@/components/ui/file-upload/avatar-upload';
import { Button, Password } from 'rizzui';

export const regions = [
  { name: 'بانک ملی', value: '1150166721' },
  { name: 'بانک شهر', value: '21524411' },
  { name: 'بانک تجارت', value: '001546785' },
];

// const SelectBox = dynamic(() => import('@/components/ui/select'), {
//   ssr: false,
//   loading: () => (
//     <div className='grid h-10 place-content-center'>
//       <Spinner />
//     </div>
//   ),
// });
// const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
//   ssr: false,
// });

export default function PersonalInfoView() {
  const onSubmit: SubmitHandler<GeneralFormTypes> = (data) => {
    console.log('ffffffffffffffffffff');

    console.log(data);

    // toast.success(<Text as="b">Successfully added!</Text>);
    // console.log('Profile settings data ->', {
    //   ...data,
    // });
  };
  return (
    <>
      <Form<GeneralFormTypes>
        validationSchema={generalFormSchema}
        // resetValues={reset}
        onSubmit={onSubmit}
        className='@container'
        useFormProps={{
          mode: 'onChange',
          defaultValues,
        }}
      >
        {({ register, control, setValue, getValues, formState: { errors } }) => (
          <div className='space-y-6'>
            <Input
              label='نام'
              type='text'
              {...register('name')}
                error={errors.name?.message}
              className='flex-grow'
            />
            <Input
              label='شماره پیگیری'
              type='number'
              required
              {...register('TrackingCode')}
                error={errors.TrackingCode?.message}
              className='flex-grow'
            />
            <Input
              label='شماره همراه*'
              type='number'
              maxLength={11}
              {...register('phoneNumber')}
                error={errors.phoneNumber?.message}
              className='flex-grow'
            />
            <Input
              label='شماره ملی*'
              type='number'
              maxLength={10}
              {...register('nationalCode')}
                error={errors.nationalCode?.message}
              className='flex-grow'
            />
            <Input
              type='email'
              size='lg'
              label='ایمیل'
              placeholder='ایمیل خود را وارد کنید'
              className='[&>label>span]:font-medium'
              color='info'
              inputClassName='text-sm'
              {...register('email')}
                error={errors.email?.message}
            />
            <Password
              label='رمز عبور'
              placeholder='******'
              size='lg'
              className='[&>label>span]:font-medium'
              color='info'
              inputClassName='text-sm'
              {...register('password')}
                error={errors.password?.message}
            />
            <Controller
              control={control}
              name='bank'
              render={({ field: { value, onChange } }) => (
                <Select
                  label='نام بانک'
                  labelClassName='font-medium text-gray-900 dark:text-white'
                  dropdownClassName='p-2 gap-1 grid'
                  value={value}
                  onChange={onChange}
                  options={regions}
                  getOptionValue={(option) => option.name}
                  displayValue={(selected: string) =>
                    countries?.find((c) => c.value === selected)?.name ?? ''
                  }
                  error={errors?.bank?.message as string}
                />
              )}
            />
            <Datepicker label={'تاریخ ثبت خطا'} onChange={() => {}} />
            <div className='mb-5 @3xl:col-span-2'>
              <UploadZone
                name='portfolios'
                getValues={getValues}
                setValue={setValue}
                error={errors?.portfolios?.message as string}
              />
            </div>
            <Button className='mt-2 w-full' type='submit' size='lg' color='info'>
              افزودن
            </Button>
          </div>
        )}
      </Form>
    </>
  );
  //   return (
  //     <Form<GeneralFormTypes>
  //       validationSchema={generalFormSchema}
  //       // resetValues={reset}
  //       onSubmit={onSubmit}
  //       className='@container'
  //       useFormProps={{
  //         mode: 'onChange',
  //         defaultValues,
  //       }}
  //     >
  //       {({ register, control, setValue, getValues, formState: { errors } }) => {
  //         return (
  //           <>
  //             <FormGroup
  //               title="Personal Info"
  //               description="Update your photo and personal details here"
  //               className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
  //             />

  //             <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
  //               <FormGroup
  //                 title="Name"
  //                 className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
  //               >
  //                 <Input
  //                   placeholder="First Name"
  //                   {...register('first_name')}
  //                   error={errors.first_name?.message}
  //                   className="flex-grow"
  //                 />
  //                 <Input
  //                   placeholder="Last Name"
  //                   {...register('last_name')}
  //                   error={errors.last_name?.message}
  //                   className="flex-grow"
  //                 />
  //               </FormGroup>

  //               <FormGroup
  //                 title="Email Address"
  //                 className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
  //               >
  //                 <Input
  //                   className="col-span-full"
  //                   prefix={
  //                     <PiEnvelopeSimple className="h-6 w-6 text-gray-500" />
  //                   }
  //                   type="email"
  //                   placeholder="georgia.young@example.com"
  //                   {...register('email')}
  //                   error={errors.email?.message}
  //                 />
  //               </FormGroup>

  //               <FormGroup
  //                 title="Your Photo"
  //                 description="This will be displayed on your profile."
  //                 className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
  //               >
  //                 <div className="flex flex-col gap-6 @container @3xl:col-span-2">
  //                   <AvatarUpload
  //                     name="avatar"
  //                     setValue={setValue}
  //                     getValues={getValues}
  //                     error={errors?.avatar?.message as string}
  //                   />
  //                 </div>
  //               </FormGroup>

  //               <FormGroup
  //                 title="Role"
  //                 className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
  //               >
  //                 <Controller
  //                   control={control}
  //                   name="role"
  //                   render={({ field: { value, onChange } }) => (
  //                     <SelectBox
  //                       placeholder="Select Role"
  //                       options={roles}
  //                       onChange={onChange}
  //                       value={value}
  //                       className="col-span-full"
  //                       getOptionValue={(option) => option.value}
  //                       displayValue={(selected) =>
  //                         roles?.find((r) => r.value === selected)?.name ?? ''
  //                       }
  //                       error={errors?.role?.message as string}
  //                     />
  //                   )}
  //                 />
  //               </FormGroup>

  //               <FormGroup
  //                 title="Country"
  //                 className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
  //               >
  //                 <Controller
  //                   control={control}
  //                   name="country"
  //                   render={({ field: { onChange, value } }) => (
  //                     <SelectBox
  //                       placeholder="Select Country"
  //                       options={countries}
  //                       onChange={onChange}
  //                       value={value}
  //                       className="col-span-full"
  //                       getOptionValue={(option) => option.value}
  //                       displayValue={(selected) =>
  //                         countries?.find((con) => con.value === selected)
  //                           ?.name ?? ''
  //                       }
  //                       error={errors?.country?.message as string}
  //                     />
  //                   )}
  //                 />
  //               </FormGroup>

  //               <FormGroup
  //                 title="Timezone"
  //                 className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
  //               >
  //                 <Controller
  //                   control={control}
  //                   name="timezone"
  //                   render={({ field: { onChange, value } }) => (
  //                     <SelectBox
  //                       prefix={<PiClock className="h-6 w-6 text-gray-500" />}
  //                       placeholder="Select Timezone"
  //                       options={timezones}
  //                       onChange={onChange}
  //                       value={value}
  //                       className="col-span-full"
  //                       getOptionValue={(option) => option.value}
  //                       displayValue={(selected) =>
  //                         timezones?.find((tmz) => tmz.value === selected)
  //                           ?.name ?? ''
  //                       }
  //                       error={errors?.timezone?.message as string}
  //                     />
  //                   )}
  //                 />
  //               </FormGroup>

  //               <FormGroup
  //                 title="Bio"
  //                 className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
  //               >
  //                 <Controller
  //                   control={control}
  //                   name="bio"
  //                   render={({ field: { onChange, value } }) => (
  //                     <QuillEditor
  //                       value={value}
  //                       onChange={onChange}
  //                       className="@3xl:col-span-2 [&>.ql-container_.ql-editor]:min-h-[100px]"
  //                       labelClassName="font-medium text-gray-700 dark:text-gray-600 mb-1.5"
  //                     />
  //                   )}
  //                 />
  //               </FormGroup>

  //               <FormGroup
  //                 title="Portfolio Projects"
  //                 description="Share a few snippets of your work"
  //                 className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
  //               >
  //                 <div className="mb-5 @3xl:col-span-2">
  //                   <UploadZone
  //                     name="portfolios"
  //                     getValues={getValues}
  //                     setValue={setValue}
  //                     error={errors?.portfolios?.message as string}
  //                   />
  //                 </div>
  //               </FormGroup>
  //             </div>
  //             <FormFooter
  //               // isLoading={isLoading}
  //               altBtnText="Cancel"
  //               submitBtnText="Save"
  //             />
  //           </>
  //         );
  //       }}
  //     </Form>
  //   );
}
