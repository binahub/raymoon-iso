'use client';
import WidgetCard from '@/components/cards/widget-card';
import { Button } from '@/components/ui/button';
import ImportButton from '@/app/shared/import-button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Text } from '@/components/ui/text';

function UploadButton() {
 
  const [file, setFile] = useState([]); // eslint-disable-next-line react-hooks/exhaustive-deps

  // form zod validation schema
  const formSchema = z.object({
    type: z.string().min(1, { message: 'ضروری' }),
    name: z.string().min(1, { message: 'ضروری' }),
  });

  const defaultValues = {
    type: '',
    name: '',
  };

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(file);

    if (file.length === 0) {
      toast.error(<Text as='b'>لطفا فایل خود را انتخاب کنید.</Text>);
    }
    console.log('AllDataForm : ', { ...data, file });
  };

  return (
    <div>
      <WidgetCard title='شارژ کیف پول' className='flex flex-col'>
        <Form
          validationSchema={formSchema}
          // resetValues={reset}
          onSubmit={onSubmit}
          useFormProps={{
            mode: 'onChange',
            defaultValues,
          }}
          className='grid gap-4 md:grid-cols-3 md:gap-7 w-[100%] pt-10 pb-6 @2xl:p-12 3xl:px-16 4xl:px-28'
        >
          {({ register, control, setValue, getValues, formState: { errors } }) => {
            return (
              <>
                <Input
                  label='نوع شارژ*'
                  type='text'
                  {...register('type')}
                  error={errors.name?.message}
                  className='flex-grow'
                />
                <Input
                  label=' نام شرکت*'
                  type='text'
                  {...register('name')}
                  error={errors.name?.message}
                  className='flex-grow'
                />
                <div className='pt-6'>
                  <ImportButton
                    title={'آپلود فایل'}
                    accept='csv'
                    getFile={(data: any) => setFile(data)}
                    multiple
                  />
                </div>
                {/* <div className='mt-2 flex justify-end pt-4'> */}
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
      </WidgetCard>
    </div>
  );
}

export default UploadButton;
