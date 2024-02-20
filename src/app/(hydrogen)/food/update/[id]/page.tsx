'use client';
import PageHeader from '@/app/shared/page-header';
import { useCategoryListMutation } from '@/provider/redux/apis/category';
import { useEffect, useState } from 'react';
import { Card } from 'shafa-bo';
import { SubmitHandler } from 'react-hook-form';
import FormData from '../../form.module';
import { pageHeader } from '../header';

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

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log('editData : ', { ...data, id: params.id });
  };

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}></PageHeader>
      <Card>
        <FormData handlerOnSubmit={onSubmit} data ={initialData} isEdit />
      </Card>
    </>
  );
}
