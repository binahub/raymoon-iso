'use client';
import { Button } from '@/components/ui/button';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import { useCategoryListMutation } from '@/provider/redux/apis/category';
import { useEffect, useRef, useState } from 'react';
import { Card, Input, Form } from 'shafa-bo';
import { SubmitHandler } from 'react-hook-form';

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

export default function FoodEditPage({ params }: any) {

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


    const [testdata , setTestData]= useState({
      name:'',
      description:''
    })    

  useEffect(() => {
    list(parameterMap);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setTestData({
        name: serverData?.foodCategoryObjectList[0]?.name,
        description: serverData?.foodCategoryObjectList[0]?.description,
      },)
    }
  }, [isSuccess, serverData]);

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log('editData : ', { ...data, id: params.id });
  };

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}></PageHeader>
      <Card>
        <Form
          // validationSchema={formSchema}
          // resetValues={reset}
          onSubmit={onSubmit}
          useFormProps={{
            mode: 'onChange',
            defaultValues: {
              name: testdata.name,
              description: testdata.description,
            },
          }}
          className='grid gap-4 md:grid-cols-3 md:gap-7 w-[100%] p-6 @2xl:p-12 3xl:px-16 4xl:px-28'
        >
          {({ register, control, setValue, getValues, formState: { errors } }) => {
            return (
              <>
                <Input
                  label='نام*'
                  id='name'
                  type='text'
                  value={testdata.name}
                  {...register('name')}
                  className='flex-grow'
                />
                <Input
                  label='توضیحات*'
                  id='description'
                  type='text'
                  value={testdata.description}
                  {...register('description')}
                  className='flex-grow'
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
