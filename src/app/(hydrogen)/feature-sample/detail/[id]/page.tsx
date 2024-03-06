'use client';
import { useEffect, useState } from 'react';
import { Card, Input, PageHeader } from 'shafa-bo';
import { headerData } from '../header';
import { useCreateSample } from '@/common/apis/test-api/sample.mutation';

type Props = {
  params: { id: string };
};

export default function DetailPage({ params }: Props) {
  const [initialData, setInitialData] = useState({ name: '', description: '' });

  /* api call body */
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
  const { mutate, data:serverData, isSuccess } = useCreateSample();

  useEffect(() => {
    mutate(parameterMap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <PageHeader title={headerData.title} breadcrumb={headerData.breadcrumb} />
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
            <Input label='کد پیگیری' labelClassName='font-medium text-gray-900 dark:text-white' className='mb-5' defaultValue={''} disabled />
          </div>
        </div>
      </Card>
    </>
  );
}
