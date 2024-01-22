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

      <div
        className={cn(
          'h-[88%] rounded-3xl border border-gray-100 bg-white @container dark:bg-gray-100 shadow-[-10px_-10px_20px_-65px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'
        )}
      >
        <div className='flex h-full w-full flex-col p-6 @2xl:p-12 3xl:px-16 4xl:px-28'>
          <Form
            onSubmit={onSubmit}
            className='grid gap-4 md:grid-cols-3 md:gap-7 w-[100%]'
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
                  <Input
                    label='شماره ترمینال'
                    labelClassName='font-medium text-gray-900 dark:text-white'
                    // {...register('company')}
                    // error={errors.company?.message}
                  />
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
                      className='dark:bg-gray-100 dark:text-white dark:active:bg-gray-100 bg-blue-darkBlue w-32'
                      // isLoading={isLoading}
                    >
                      افزودن
                    </Button>
                  </div>
                </>
              );
            }}
          </Form>
        </div>
      </div>
    </>
  );
}
