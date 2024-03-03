'use client';
import React, { useEffect, useState } from 'react';
import { useTable } from '@/hooks/use-table';
import { FilterElement, PageHeader, Button, Input, Form, Card, Table } from 'shafa-bo';
import { useCategoryListMutation } from '@/provider/redux/apis/category';
import { SubmitHandler } from 'react-hook-form';
import { foodInquirySchema } from '@/utils/validators/food.schema';
import { headerData } from './header';
import { detail } from '../detail/collaps';
import { getColumns } from './columns';
import { dataFilter, filterState } from './filter';

export default function FoodPage() {
  const [rowEdit, setRowEdit] = useState({});
  const [pageNumer, setPageNumer] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  /* api call body */
  const parameterMap = {
    parameterMap: {
      page: pageNumer,
      size: pageSize,
      orderBy: 'id',
      sort: 'asc',
    },
  };

  /* api call */
  const [list, { isLoading, data: dataService }] = useCategoryListMutation();

  /* use hooks for table*/
  const { isFiltered, filters, updateFilter, handleReset, tableData, currentPage, handleDelete, handlePaginate, setData } = useTable(
    dataService?.foodCategoryObjectList,
    pageSize,
    dataService?.totalElements,
    filterState
  );

  useEffect(() => {
    setPageNumer(currentPage - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (!isLoading) {
      setData(dataService?.foodCategoryObjectList);
    }
    setPageNumer(currentPage - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDeleteItem = (id: string) => {
    handleDelete(id);
  };

  /* use options columns */
  const columns = React.useMemo(
    () =>
      getColumns({
        onDeleteItem,
      }),
    [onDeleteItem]
  );

  /* Handel filter with my dataFilter */
  const actionFilter = (filters: any) => {
    list({ parameterMap: { ...parameterMap.parameterMap, ...filters } });
    setIsInitialLoad(true);
  };

  const onSubmit: SubmitHandler<any> = (data) => {
    list({ parameterMap: { ...parameterMap.parameterMap, ...data } });
    setIsInitialLoad(true);
  };

  useEffect(() => {
    if (isInitialLoad) {
      list(parameterMap);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumer, pageSize]);

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
                    استعلام
                  </Button>
                </div>
              </>
            );
          }}
        </Form>
      </Card>
      <Table
        /* get data from api && changes data after pagination and filter */
        tableData={tableData}
        /* get columns table */
        columns={columns}
        /* choose between two types of table */
        requiredSeachTable
        /* show detail or ReactNode */
        expandedRow={(rowData: any) => detail(rowData)}
        expandedKeys={[rowEdit]}
        onExpand={(expanded: boolean, row: any) => {
          expanded ? setRowEdit(row.id) : setRowEdit({});
        }}
        /* show table pagination and handle functionality  */
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: dataService?.totalElements,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
        /* show filter drawer && handle filter */
        filterElement={() =>
          FilterElement({
            isFiltered,
            handleReset,
            filters,
            updateFilter,
            dataFilter,
            actionFilter,
          })
        }
        isLoading={isLoading}
        /* title export file */
        exportColumns={exportColumns}
      />
    </>
  );
}
