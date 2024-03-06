'use client';
import { SubmitHandler, Controller } from 'react-hook-form';
import { regions } from './data';
import { Datepicker, Input, Button, Form, Select, UploadZone, Password } from 'shafa-bo';
import {
  GeneralFormTypes,
  // generalFormSchema,
  // defaultValues,
} from '@/common/utils/validators/general.schema';

type Props = {
  handlerOnSubmit: (data: any) => void;
  data?: any;
  isEdit?: boolean;
  numberCol: number;
};

export default function FormData({ handlerOnSubmit, data, isEdit, numberCol }: Props) {
  const onSubmit: SubmitHandler<GeneralFormTypes> = (value) => {
    handlerOnSubmit(value);
  };  

  return (
    <>
      <Form<GeneralFormTypes>
        // validationSchema={generalFormSchema}
        onSubmit={onSubmit}
        useFormProps={{
          mode: 'onChange',
          // defaultValues,
        }}
        className={`grid gap-4 md:grid-cols-${numberCol} md:gap-7 w-[100%] @2xl:p-12 3xl:px-6 4xl:px-28`}
      >
        {({ register, control, setValue, getValues, formState: { errors } }) => {
          return (
            <>
              <Input
                label='نام*'
                type='text'
                {...register('name')}
                error={isEdit ? '' : errors.name?.message}
                defaultValue={data?.name}
                className='flex-grow'
              />
              <Input
                label='توضیحات*'
                type='text'
                {...register('description')}
                error={isEdit ? '' : errors.description?.message}
                defaultValue={data?.description}
                className='flex-grow'
              />
              <Input
                label='شماره همراه*'
                type='tel'
                maxLength={11}
                pattern='[0-9]*'
                {...register('phoneNumber')}
                error={isEdit ? '' : errors.phoneNumber?.message}
                className='flex-grow '
                dir='rtl'
                disabled={isEdit}
              />
              <Input
                label='شماره ملی*'
                type='tel'
                pattern='[0-9]*'
                maxLength={10}
                {...register('nationalCode')}
                error={isEdit ? '' : errors.nationalCode?.message}
                className='flex-grow '
                dir='rtl'
                disabled={isEdit}
              />
              <Input
                type='email'
                label='ایمیل*'
                placeholder='ایمیل خود را وارد کنید'
                className='[&>label>span]:font-medium'
                color='info'
                inputClassName='text-sm'
                {...register('email')}
                error={isEdit ? '' : errors.email?.message}
                disabled={isEdit}
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
                    displayValue={(selected: string) => regions?.find((c) => c.name === selected)?.name ?? ''}
                    error={isEdit ? '' : errors?.bank?.message}
                    disabled={isEdit}
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
                error={isEdit ? '' : errors.password?.message}
                disabled={isEdit}
              />
              <Password
                label=' رمز عبور جدید*'
                placeholder='******'
                className='[&>label>span]:font-medium '
                inputClassName='text-sm'
                {...register('newPassword')}
                error={isEdit ? '' : errors.newPassword?.message}
                disabled={isEdit}
              />
              <Controller
                control={control}
                name='startDate'
                render={({ field: { value, onChange } }) => (
                  <Datepicker
                    label='تاریخ شروع'
                    value={value}
                    onChange={onChange}
                    error={isEdit ? '' : errors.newPassword?.message}
                    disabled={isEdit}
                  />
                )}
              />
              {!isEdit && (
                <div className='mb-6 @3xl:col-span-3 mt-5'>
                  <UploadZone
                    name='userInfo'
                    getValues={getValues}
                    setValue={setValue}
                    error={isEdit ? '' : (errors?.userInfo?.message as string)}
                    handleUpload={(data: any) => console.log(data)}
                    inForm
                  />
                </div>
              )}
              <div className='col-span-full mt-2 flex items-center justify-end'>
                <Button
                  type='submit'
                  className='w-32'
                  // isLoading={isLoading}
                >
                  {isEdit ? 'ویرایش' : ' افزودن'}
                </Button>
              </div>
            </>
          );
        }}
      </Form>
    </>
  );
}
