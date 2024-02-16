
/* generate content for update in modal */

'use client ';
import { Input } from '@/components/ui/input';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { ActionIcon, Title } from 'rizzui';
import { Button } from '@/components/ui/button';
import { PiXBold } from 'react-icons/pi';
import { Form } from 'shafa-bo';
import { SubmitHandler } from 'react-hook-form';
import { FoodSchema, foodSchema } from '@/utils/validators/food.schema';

type Props = {
  rowData: {
    id: string;
    name: string;
    description: string;
  };
};
export function ModalView(rowData: Props) {
  const { closeModal } = useModal();

  /* initialValues form */
  const initialValues: FoodSchema = {
    id: rowData.rowData?.id,
    name: rowData.rowData?.name,
    description: rowData.rowData?.description,
  };
  

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log('data : ', { ...data, id: rowData.rowData.id });
  };

  return (
    <div className='m-auto px-5 pb-10 pt-5 @lg:pt-6 @2xl:px-7 '>
      <div className='mb-1 flex items-center justify-between'>
        <Title as='h4' className='font-semibold '>
          ویرایش جزئیات
        </Title>
        <ActionIcon size='sm' variant='text' onClick={() => closeModal()}>
          <PiXBold className='h-auto w-5' />
        </ActionIcon>
      </div>
      <hr className='my-6 w=[80%] h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50' />
      <Form
        validationSchema={foodSchema}
        onSubmit={onSubmit}
        useFormProps={{
          mode: 'onChange',
          defaultValues: initialValues,
        }}
        className=' grid w-[100%] grid-cols-2 gap-5 bg-white dark:bg-gray-100 pb-6 pt-6'
      >
        {({ register, formState: { errors } }) => {
          return (
            <>
              <Input
                label='نام*'
                id='name'
                type='text'
                defaultValue={rowData?.rowData?.name}
                {...register('name')}
                className='flex-grow'
                error={errors?.name?.message}
              />
              <Input
                label='توضیحات*'
                id='description'
                type='text'
                defaultValue={rowData?.rowData?.description}
                {...register('description')}
                className='flex-grow'
                error={errors?.description?.message}
              />
              <div className='col-span-full mt-2 flex items-center justify-end'>
                <Button
                  type='submit'
                  className='w-32'
                  // isLoading={isLoading}
                >
                  ویرایش
                </Button>
              </div>
            </>
          );
        }}
      </Form>
    </div>
  );
}
