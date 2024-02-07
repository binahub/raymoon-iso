'use client';
import React, { useEffect, useState } from 'react';
import { useTable } from '@/hooks/use-table';
import { routes } from '@/config/routes';
import BasicTablePage from '@/app/shared/table/table';
import FilterElement from '@/app/shared/table/content-filter';
import { detail } from './detail';
import { getColumns } from './columns';
import { useCategoryListMutation } from '@/provider/redux/apis/category';
import { dataFilter, filterState } from './filter';

export default function NeshanPage() {
  const [rowEdit, setRowEdit] = useState({});
  const [pageNumer, setPageNumer]  = useState(0);
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
        href: routes.neshan.list,
        name: 'سفارشات',
      },
      {
        name: ' لیست سفارشات غذا',
      },
    ],
  };

  /* create title excel coulemns */
  const titleExcelColumns = 'Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At';
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
    setData
  } = useTable(data?.foodCategoryObjectList, pageSize, data?.totalElements, filterState);

  
  useEffect(() => {
    setPageNumer(currentPage - 1);
  }, [currentPage]);

    
  useEffect(() => {
    if(!isLoading){
      setData(data?.foodCategoryObjectList)
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

  /* use options colums */
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

  /* Handle filter with my dataFilter */
  const actionFilter = (filters: any) => {
    list({ parameterMap: { ...parameterMap.parameterMap, ...filters } });
  };

  return (
    <BasicTablePage
      pageHeader={pageHeader}
      buttons={['export']}
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
      getColumns={getColumns}
      expandedRow={(rowData: any) => detail(rowData)}
      paginatorOptions={{
        pageSize,
        setPageSize,
        total: data?.totalElements,
        current: currentPage,
        onChange: (page: number) => handlePaginate(page),
      }}
      data={data?.foodCategoryObjectList}
      expandedKeys={[rowEdit]}
      onExpand={(expanded: boolean, row: any) => {
        expanded ? setRowEdit(row.id) : setRowEdit({});
      }}
      isLoading={isLoading}
      columns={columns}
      handleSearch={handleSearch}
      searchTerm={searchTerm}
      tableData={tableData}
      fileTitles={titleExcelColumns}
    />
  );
}
