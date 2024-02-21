'use client';
import PageHeader from '@/app/shared/page-header';
import { useCategoryListMutation } from '@/provider/redux/apis/category';
import { useEffect, useState } from 'react';
import Card from '@/components/cards/card';
import { headerData } from '../header';
import { Input } from '@/components/ui/input';

type Props = {
  params: { id: string };
};

export default function FoodEditPage({ params }: Props) {
  const [initialData, setInitialData] = useState({ name: '', description: '' });

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

  useEffect(() => {
    list(parameterMap);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setInitialData({
        name: serverData?.foodCategoryObjectList[0]?.name,
        description: serverData?.foodCategoryObjectList[0]?.description,
      });
    }
  }, [isSuccess, serverData]);

  return (
    <>
      <PageHeader title={headerData.title} breadcrumb={headerData.breadcrumb}/>
      <Card>
        <div className=' grid w-[100%] grid-cols-3 gap-5 p-5'>
          <div>
            <Input
              label='نام'
              labelClassName='font-medium text-gray-900 dark:text-white'
              className='mb-5'
              defaultValue={initialData?.name}
              disabled
            />
          </div>
          <div>
            <Input
              label=' توضیحات'
              labelClassName='font-medium text-gray-900 dark:text-white'
              className='mb-5'
              defaultValue={initialData?.description}
              disabled
            />
          </div>
          <div>
            <Input
              label='کد پیگیری'
              labelClassName='font-medium text-gray-900 dark:text-white'
              className='mb-5'
              defaultValue={''}
              disabled
            />
          </div>
        </div>
      </Card>
    </>
  );
}
