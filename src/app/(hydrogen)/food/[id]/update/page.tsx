'use client';
import { Button } from '@/components/ui/button';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import { useCategoryListMutation } from '@/provider/redux/apis/category';
import { useEffect, useRef, useState } from 'react';
import { Card, Input, Form } from 'shafa-bo';
import { SubmitHandler } from 'react-hook-form';
import { FoodSchema, foodSchema } from '@/utils/validators/food.schema';

type Props = {
  params: { id: string };
};

const pageHeader = {
  title: 'سفارش غذا',
  breadcrumb: [
    {
      href: routes.food.list,
      name: 'لیست سفارشات غذا',
    },
    {
      name: 'ویرایش',
    },
  ],
};

export default function FoodEditPage({ params }: Props) {

  /* input data for post api */
  const parameterMap = {
    parameterMap: {
      id: params.id,
      page: 0,
      size: 1,
      orderBy: 'id',
      sort: 'asc',
    },
  };

  /* api call */
  const [list, { isLoading, isSuccess, isError, error, data: serverData }] =
    useCategoryListMutation();

  /* initialValues form */
  const initialValues: FoodSchema = {
    id: params.id,
    name: serverData?.foodCategoryObjectList[0]?.name,
    description: serverData?.foodCategoryObjectList[0]?.description,
  };

  useEffect(() => {
    list(parameterMap);
  }, []);

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log('editData : ', { ...data, id: params.id });
  };

  if (isLoading) {
    return;
  }

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}></PageHeader>
      <Card>
        <Form
          validationSchema={foodSchema}
          onSubmit={onSubmit}
          useFormProps={{
            mode: 'onChange',
            defaultValues: initialValues,
          }}
          className='grid gap-4 md:grid-cols-2 md:gap-7 w-[100%] p-6 @2xl:p-12 3xl:px-16 4xl:px-28'
        >
          {({ register, formState: { errors } }) => {
            return (
              <>
                <Input
                  label='نام*'
                  id='name'
                  type='text'
                  {...register('name')}
                  className='flex-grow'
                  error={errors?.name?.message}
                />
                <Input
                  label='توضیحات*'
                  id='description'
                  type='text'
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
      </Card>
    </>
  );
}
