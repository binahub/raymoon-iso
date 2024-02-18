/* generate dataFilter for generate content filter inside drawer filter */

'use client';
import React, { useEffect, useState } from 'react';
import { useTable } from '@/hooks/use-table';
import { routes } from '@/config/routes';
//@TODO: should change import from package
import Table from '@/app/shared/table/table';
import FilterElement from '@/app/shared/table/content-filter';
import { detail } from './detail';
import { getColumns } from './columns';
import { useCategoryListMutation } from '@/provider/redux/apis/category';
import { dataFilter, filterState } from './filter';
import PageHeader from '@/app/shared/page-header';
import { Button, Form, Input } from 'shafa-bo';
import Card from '@/components/cards/card';
import { SubmitHandler } from 'react-hook-form';
import ImportButton from '@/app/shared/import-button';

export default function NeshanPage() {
  const [rowEdit, setRowEdit] = useState({});
  const [pageNumer, setPageNumer] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  const parameterMap = {
    parameterMap: {
      page: pageNumer,
      size: pageSize,
      orderBy: 'id',
      sort: 'asc',
    },
  };
  const pageHeader = {
    title: 'سفارش غذا',
    breadcrumb: [
      {
        href: routes.food.inquiry,
        name: 'سفارشات',
      },
      {
        name: ' لیست سفارشات غذا',
      },
    ],
  };

  /* create title excel columns */
  const exportColumns = 'Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At';
  /* api call */
  const [list, { isLoading, isSuccess, isError, error, data }] = useCategoryListMutation();

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
  } = useTable(data?.foodCategoryObjectList, pageSize, data?.totalElements, filterState);

  useEffect(() => {
    setPageNumer(currentPage - 1);
  }, [currentPage]);

  useEffect(() => {
    if (!isLoading) {
      setData(data?.foodCategoryObjectList);
    }
    setPageNumer(currentPage - 1);
  }, [isLoading]);

  useEffect(() => {
    list(parameterMap);
  }, [pageNumer, pageSize]);

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
        data,
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
    list(parameterMap)
  };

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}></PageHeader>
      <Card className='rounded-t-3xl mb-5'>
        <Form
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
                  type='text'
                  {...register('name')}
                  // error={errors.name?.message}
                  className='flex-grow'
                />                <div className='flex justify-end items-end'>
                  <Button
                    type='submit'
                    className='w-32'
                    // isLoading={isLoading}
                  >
                    استعلام
                  </Button>
                </div>
              </>
            );
          }}
        </Form>
      </Card>
      <Table
        inquiryTable
        /* get data from api call */
        // data={data?.foodCategoryObjectList}
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
          total: data?.totalElements,
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
            // actionFilter,
          })
        }
        isLoading={isLoading}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />
    </>
  );
}
