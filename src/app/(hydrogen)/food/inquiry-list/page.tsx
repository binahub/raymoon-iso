'use client';
import React, { useEffect, useState } from 'react';
import { useTable } from '@/hooks/use-table';
//@TODO: should change import from package
import Table from '@/app/shared/table/table';
import FilterElement from '@/app/shared/table/content-filter';
import { detail } from '../detail/collaps';
import { getColumns } from './columns';
import { useCategoryListMutation } from '@/provider/redux/apis/category';
import { dataFilter, filterState } from './filter';
import PageHeader from '@/app/shared/page-header';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Form } from '@/components/ui/form';
// import Card from '@/components/cards/card';
const Card = dynamic(() => import('shafa-bo').then((module) => module.Card), { ssr: false });
const Input = dynamic(() => import('shafa-bo').then((module) => module.Input), { ssr: false });
const Button = dynamic(() => import('shafa-bo').then((module) => module.Button), { ssr: false });
const Form = dynamic(() => import('shafa-bo').then((module) => module.Form), { ssr: false });

import { SubmitHandler } from 'react-hook-form';
import { foodInquirySchema, FoodInquirySchema } from '@/utils/validators/food.schema';
import { headerData } from './header';
import dynamic from 'next/dynamic';

export default function NeshanPage() {
  const [rowEdit, setRowEdit] = useState({});
  const [pageNumer, setPageNumer] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  const parameterMap = {
    parameterMap: {
      page: pageNumer,
      size: pageSize,
      orderBy: 'id',
      sort: 'asc',
    },
  };

  /* create title excel columns */
  const exportColumns = 'شناسه,نام,ایمیل';

  /* api call */
  const [list, { isLoading, isSuccess, isError, error, data: dataService }] =
    useCategoryListMutation();

  /* use hooks for table*/
  const {
    isFiltered,
    filters,
    updateFilter,
    handleReset,
    sortConfig,
    tableData,
    currentPage,
    searchTerm,
    handleSort,
    handleDelete,
    handleSearch,
    handlePaginate,
    selectedRowKeys,
    handleRowSelect,
    handleSelectAll,
    setData,
  } = useTable(
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

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = (id: string) => {
    handleDelete(id);
  };

  /* use options columns */
  const columns = React.useMemo(
    () =>
      getColumns({
        data: dataService?.foodCategoryObjectList,
        sortConfig,
        onHeaderCellClick,
        onDeleteItem,
        checkedItems: selectedRowKeys,
        onChecked: handleRowSelect,
        handleSelectAll,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      selectedRowKeys,
      onHeaderCellClick,
      sortConfig.key,
      sortConfig.direction,
      onDeleteItem,
      handleRowSelect,
      handleSelectAll,
    ]
  );

  /* Handel filter with my dataFilter */
  const actionFilter = (filters: any) => {
    list({ parameterMap: { ...parameterMap.parameterMap, ...filters } });
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

  return (
    <>
      <PageHeader title={headerData.title} breadcrumb={headerData.breadcrumb}></PageHeader>
      <Card className='rounded-t-3xl mb-5'>
        <Form
          validationSchema={foodInquirySchema}
          onSubmit={onSubmit}
          useFormProps={{
            mode: 'onChange',
          }}
          className='grid gap-4 md:grid-cols-3 md:gap-7 w-[100%]  @2xl:p-8 3xl:px-12 4xl:px-24'
        >
          {({ register, control, setValue, getValues, formState: { errors } }) => {
            return (
              <>
                <Input
                  label='نام*'
                  id='name'
                  type='text'
                  {...register('name')}
                  className='flex-grow'
                  // error={errors?.name?.message}
                />
                <Input
                  label='توضیحات*'
                  id='description'
                  type='text'
                  {...register('description')}
                  className='flex-grow'
                  // error={errors?.description?.message}
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
        /* get data from api call */
        data={dataService?.foodCategoryObjectList}
        /* get columns for table */
        columns={columns}
        /* data detail for show in expanded table */
        expandedRow={(rowData: any) => detail(rowData)}
        expandedKeys={[rowEdit]}
        onExpand={(expanded: boolean, row: any) => {
          expanded ? setRowEdit(row.id) : setRowEdit({});
        }}
        /* table pagination  */
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: dataService?.totalElements,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
        tableData={tableData}
        /* table filter */
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
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        exportColumns={exportColumns}
        requiredSeachTable
      />
    </>
  );
}
