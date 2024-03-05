'use client';
import React, { useState } from 'react';
import { PageHeader, Button, Input, Form, Card } from 'shafa-bo';
import Table from '@/app/shared/table/table';
import { useCategoryListMutation } from '@/provider/redux/apis/category';
import { SubmitHandler } from 'react-hook-form';
import { foodInquirySchema } from '@/utils/validators/food.schema';
import { headerData } from './header';
import { detail } from '../detail/collaps';
import { Columns } from './columns';
import { generatedFilter, initialFilterValues } from './filter';

export default function FoodPage() {
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  /* api call body */
  const parameterMap = {
    parameterMap: {
      page: 0,
      size: 5,
      orderBy: 'id',
      sort: 'asc',
    },
  };

  /* api call */
  const [list, { isLoading, data }] = useCategoryListMutation();

  const onSubmit: SubmitHandler<any> = (data) => {
    list({ parameterMap: { ...parameterMap.parameterMap, ...data } });
    setIsInitialLoad(true);
  };

  /* table setting */
  const handleDataChange = (parametr: any) => {
    if (isInitialLoad) {
      list({ parameterMap: { ...parameterMap.parameterMap, ...parametr } });
    }
    setIsInitialLoad(true);
  };

  /* create title excel columns */
  const exportColumns = 'Order ID,Name';

  return (
    <>
      <PageHeader title={headerData.title} breadcrumb={headerData.breadcrumb} />
      <Card className='rounded-t-3xl mb-5'>
        <Form
          validationSchema={foodInquirySchema}
          onSubmit={onSubmit}
          useFormProps={{
            mode: 'onChange',
          }}
          className='grid gap-4 md:grid-cols-3 md:gap-7 w-[100%]  @2xl:p-8 3xl:px-12 4xl:px-24'
        >
          {({ register, formState: { errors } }) => {
            return (
              <>
                <Input label='نام*' id='name' type='text' {...register('name')} className='flex-grow' error={errors?.name?.message} />
                <Input
                  label='توضیحات*'
                  id='description'
                  type='text'
                  {...register('description')}
                  className='flex-grow'
                  error={errors?.description?.message}
                />
                <div className='flex justify-end items-end'>
                  <Button type='submit' className='w-32' isLoading={isLoading}>
                    جستجو
                  </Button>
                </div>
              </>
            );
          }}
        </Form>
      </Card>
      <Table
        pageHeader={headerData}
        /* get columns table */
        columns={Columns}
        /* get data from api call */
        data={data}
        /* handle data table with pagination and filter */
        handleDataChange={handleDataChange}
        /* handle expanded table and show detail or any ReactNode  */
        expandedRow={(rowData: any) => detail(rowData)}
        /* generate model for form filters */
        filter={{ generatedFilter, initialFilterValues }}
        /* export file */
        exportFile={{ name: 'export-food-table', columns: exportColumns }}
        isLoading={isLoading}
        /* choose between two types of table */
        requiredSeachTable
      />
    </>
  );
}
