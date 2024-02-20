'use client';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import { Form } from '@/components/ui/form';
import Select from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SubmitHandler, Controller } from 'react-hook-form';
import { regions } from '../data';
import { Datepicker } from '@/components/ui/datepicker';
import { countries, roles, timezones } from '@/data/forms/my-details';
// import { Datepicker } from 'shafa-bo';
import {
  GeneralFormTypes,
  generalFormSchema,
  defaultValues,
} from '@/utils/validators/general.schema';
import UploadZone from '@/components/ui/file-upload/upload-zone';
import { Password } from 'rizzui';
import Card from '@/components/cards/card';

const pageHeader = {
  title: 'نشان بانک',
  breadcrumb: [
    {
      href: routes.neshan.add,
      name: ' نشان اعتباری ',
    },
    {
      name: 'افزودن پرداخت نشان اعتباری',
    },
  ],
};

export default function SupportInboxPage() {
  const onSubmit: SubmitHandler<GeneralFormTypes> = (data) => {
    console.log('AllDataForm : ', data);
  };

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}></PageHeader>
      <Card>
        <Form<GeneralFormTypes>
          validationSchema={generalFormSchema}
          // resetValues={reset}
          onSubmit={onSubmit}
          useFormProps={{
            mode: 'onChange',
            defaultValues,
          }}
          className='grid gap-4 md:grid-cols-3 md:gap-7 w-[100%] p-6 @2xl:p-12 3xl:px-16 4xl:px-28'
        >
          {({ register, control, setValue, getValues, formState: { errors } }) => {
            return (
              <>
                <Input
                  label='نام*'
                  type='text'
                  {...register('name')}
                  error={errors.name?.message}
                  className='flex-grow'
                />
                <Input
                  label='توضیحات*'
                  type='number'
                  {...register('description')}
                  error={errors.description?.message}
                  className='flex-grow '
                />
                <Input
                  label='شماره همراه*'
                  type='tel'
                  maxLength={11}
                  pattern='[0-9]*'
                  {...register('phoneNumber')}
                  error={errors.phoneNumber?.message}
                  className='flex-grow '
                  dir='rtl'
                />
                <Input
                  label='شماره ملی*'
                  type='tel'
                  pattern='[0-9]*'
                  maxLength={10}
                  {...register('nationalCode')}
                  error={errors.nationalCode?.message}
                  className='flex-grow '
                  dir='rtl'
                />
                <Input
                  type='email'
                  label='ایمیل*'
                  placeholder='ایمیل خود را وارد کنید'
                  className='[&>label>span]:font-medium'
                  color='info'
                  inputClassName='text-sm'
                  {...register('email')}
                  error={errors.email?.message}
                />
                <Controller
                  control={control}
                  name='bank'
                  render={({ field: { value, onChange } }) => (
                    <Select
                      label='نام بانک*'
                      labelClassName='font-medium text-gray-900 dark:text-white'
                      dropdownClassName='p-2 gap-1 grid'
                      value={value}
                      onChange={onChange}
                      options={regions}
                      getOptionValue={(option) => option.name}
                      displayValue={(selected: string) =>
                        regions?.find((c) => c.name === selected)?.name ?? ''
                      }
                      error={errors?.bank?.message}
                    />
                  )}
                />
                <Password
                  label='رمز عبور*'
                  placeholder='******'
                  className='[&>label>span]:font-medium '
                  color='info'
                  inputClassName='text-sm'
                  {...register('password')}
                  error={errors.password?.message}
                />
                <Password
                  label=' رمز عبور جدید*'
                  placeholder='******'
                  className='[&>label>span]:font-medium mb-6 @2xl:col-span-2'
                  inputClassName='text-sm'
                  {...register('newPassword')}
                  error={errors.newPassword?.message}
                />
                <Controller
                  control={control}
                  name='startDate'
                  render={({ field: { value, onChange } }) => (
                    <Datepicker
                      label='تاریخ شروع'
                      value={value}
                      onChange={onChange}
                      error={errors?.startDate}
                    />
                  )}
                />
                <div className='mb-6 @3xl:col-span-3'>
                  <UploadZone
                    name='userInfo'
                    getValues={getValues}
                    setValue={setValue}
                    error={errors?.userInfo?.message as string}
                    handleUpload={(data: any) => console.log(data)}
                    inForm
                  />
                </div>
                <div className='col-span-full mt-2 flex items-center justify-end'>
                  <Button
                    type='submit'
                    className='w-32'
                    // isLoading={isLoading}
                  >
                    افزودن
                  </Button>
                </div>
              </>
            );
          }}
        </Form>
      </Card>
    </>
  );
}
