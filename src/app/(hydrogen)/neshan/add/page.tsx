'use client';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import { Form } from '@/components/ui/form';
import Select from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Controller } from 'react-hook-form';
import { regions, status } from '../data';
import cn from '@/utils/class-names';
import { Datepicker } from 'shafa-bo';
import CustomCard from '@/components/cards/custom-card';

// export const metadata = {
//   ...metaObject(' ایوا'),
// };

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
  const onSubmit = () => {};
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}></PageHeader>
      <CustomCard>
        <Form
          onSubmit={onSubmit}
          className='grid gap-4 md:grid-cols-3 md:gap-7 w-[100%] p-6 @2xl:p-12 3xl:px-16 4xl:px-28'
        >
          {({ register, control, setValue, getValues, formState: { errors } }) => {
            console.log('errors', errors);
            return (
              <>
                <Input
                  label='کدخطا*'
                  labelClassName='font-medium text-gray-900 dark:text-white'
                  // {...register('fullName')}
                  // error={errors.fullName?.message}
                />
                <Input
                  label='شرح خطا*'
                  labelClassName='font-medium text-gray-900 dark:text-white'
                  // {...register('email')}
                  // error={errors.email?.message}
                />
                <Input
                  label='شماره مرجع'
                  labelClassName='font-medium text-gray-900 dark:text-white'

                  // {...register('email')}
                  // error={errors.email?.message}
                />
                <Input
                  label='شماره ترمینال'
                  labelClassName='font-medium text-gray-900 dark:text-white'
                  // {...register('company')}
                  // error={errors.company?.message}
                />
                <Input
                  label='شماره مرجع'
                  labelClassName='font-medium text-gray-900 dark:text-white'
                  // {...register('email')}
                  // error={errors.email?.message}
                />
                <Input
                  label='شماره ترمینال'
                  labelClassName='font-medium text-gray-900 dark:text-white'
                  // {...register('company')}
                  // error={errors.company?.message}
                />
                <Datepicker label={'تاریخ ثبت خطا'} onChange={() => {}} />
                <Controller
                  control={control}
                  name='region'
                  render={({ field: { value, onChange } }) => (
                    <Select
                      label='حوزه فعالیت'
                      labelClassName='font-medium text-gray-900 dark:text-white'
                      dropdownClassName='p-2 gap-1 grid'
                      value={value}
                      onChange={onChange}
                      options={regions}
                      getOptionValue={(option) => option.name}
                      // displayValue={(selected: string) =>
                      //   regions?.find((c) => c.value === selected)?.name ?? ''
                      // }
                      error={errors?.region?.message as string}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name='country'
                  render={({ field: { value, onChange } }) => (
                    <Select
                      label='وضعیت فعالیت'
                      labelClassName='font-medium text-gray-900 dark:text-white'
                      dropdownClassName='p-2 gap-1 grid'
                      value={value}
                      onChange={onChange}
                      options={status}
                      getOptionValue={(option) => option.name}
                      // displayValue={(selected: string) =>
                      //   countries?.find((c) => c.value === selected)?.name ?? ''
                      // }
                      error={errors?.country?.message as string}
                    />
                  )}
                />
                <div className='col-span-full mt-2 flex items-center justify-end'>
                  <Button
                    type='submit'
                    className=' dark:text-white dark:bg-yellow-500 bg-primary w-32'
                    // isLoading={isLoading}
                  >
                    افزودن
                  </Button>
                </div>
              </>
            );
          }}
        </Form>
      </CustomCard>
    </>
  );
}
