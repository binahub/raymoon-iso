'use client';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import { Form } from '@/components/ui/form';
import Select from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Controller } from 'react-hook-form';
import { regions, status } from './data';
import cn from '@/utils/class-names';

// export const metadata = {
//   ...metaObject(' ایوا'),
// };

const pageHeader = {
  title: 'ایوا',
  breadcrumb: [
    {
      href: routes.iva.add,
      name: '  خطاهای شاپرکی',
    },
    {
      name: 'افزودن خطای جدید',
    },
  ],
};

export default function SupportInboxPage(
//   {
//   className,
// }: {
//   className?: string;
// }
) {

  const onSubmit = ()=>{}
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <div
        // className={cn(
        //   className,
        //   'rounded-2xl border border-gray-100 bg-white @container dark:bg-gray-100 shadow-[0_35px_100px_-15px_rgba(0,0,0,0.3)]'
        // )}
      >
        <div className="flex h-full w-full flex-col items-center justify-center p-6 py-10 @2xl:p-12 3xl:px-16 4xl:px-28">
          {/* <h2 className="mx-auto mb-6 text-center text-xl font-bold text-black @2xl:mb-8 @2xl:text-2xl @7xl:text-3xl @7xl:leading-10 dark:text-white">
          Subscribe to our newsletter!
        </h2> */}

     <Form
        onSubmit={onSubmit}
        // resetValues={reset}
        // validationSchema={customerProfileSchema}
        // useFormProps={{
        //   defaultValues: initialValues,
        // }}
        className="mt-7 grid gap-4 md:grid-cols-2 md:gap-7 w-[100%]"
      >
        {({
          register,
          control,
          setValue,
          getValues,
          formState: { errors },
        }) => {
          console.log('errors', errors);
          return (
            <>
              {/* <AvatarUpload
                name="avatar"
                setValue={setValue}
                getValues={getValues}
                className="col-span-full"
              /> */}
              {/* <UploadZone
                label="Cover Photo"
                name="coverPhoto"
                setValue={setValue}
                getValues={getValues}
                className="col-span-full"
              /> */}
              <Input
                label="کدخطا*"
                labelClassName="font-medium text-gray-900 dark:text-white"
                // {...register('fullName')}
                // error={errors.fullName?.message}
              />
              <Input
                label="شرح خطا*"
                labelClassName="font-medium text-gray-900 dark:text-white"
                // {...register('email')}
                // error={errors.email?.message}
              />
              <Input
                label="شماره مرجع"
                labelClassName="font-medium text-gray-900 dark:text-white"
                // {...register('email')}
                // error={errors.email?.message}
              />
              <Input
                label="شماره ترمینال"
                labelClassName="font-medium text-gray-900 dark:text-white"
                // {...register('company')}
                // error={errors.company?.message}
              />
              {/* <Input
                label="Phone "
                placeholder="Enter your phone number..."
                labelClassName="font-medium text-gray-900 dark:text-white"
                {...register('phone')}
                error={errors.phone?.message}
              /> */}
              <Controller
                control={control}
                name="region"
                render={({ field: { value, onChange } }) => (
                  <Select
                    label="حوزه فعالیت"
                    labelClassName="font-medium text-gray-900 dark:text-white"
                    dropdownClassName="p-2 gap-1 grid"
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
                name="country"
                render={({ field: { value, onChange } }) => (
                  <Select
                    label="وضعیت فعالیت"
                    labelClassName="font-medium text-gray-900 dark:text-white"
                    dropdownClassName="p-2 gap-1 grid"
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
              <div className="col-span-full mt-2 flex items-center justify-end">
                <Button
                  type="submit"
                  className="dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
                  // isLoading={isLoading}
                >
                 افزودن
                </Button>
              </div>
            </>
          );
        }}
      </Form>
          {/* <NewsLetterForm /> */}
        </div>
      </div>

      {/* <TabList /> */}

      {/* <SupportInbox /> */}
    </>
  );
}
