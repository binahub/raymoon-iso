'use client';
import { useEffect, useState } from 'react';
import { Card ,PageHeader } from 'shafa-bo';
import { SubmitHandler } from 'react-hook-form';
import FormData from '../../form.module';
import { headerData } from '../header';
import { useCreateSample } from '@/common/apis/test-api/sample.mutation';

type Props = {
  params: { id: string };
};

export default function EditPage({ params }: Props) {
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
    const { mutate, isPending:isLoading, data:serverData, isSuccess } = useCreateSample();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, serverData]);

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log('editData : ', { ...data, id: params.id });
  };

  return (
    <>
      <PageHeader title={headerData.title} breadcrumb={headerData.breadcrumb}/>
        <Card>
          <FormData handlerOnSubmit={onSubmit} data={initialData} numberCol={3} isEdit />
        </Card>
    </>
  );
}
