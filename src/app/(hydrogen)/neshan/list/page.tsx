'use client';
import { routes } from '@/config/routes';
import { getColumns } from './columns';
import Table from '@/app/shared/table/table';
import FilterElement from '@/app/shared/table/filter';
import { detail } from './detail';
import React, { useState } from 'react';
import { useTable } from '@/hooks/use-table-mock';
import { neshanData } from '../data';

export default function NeshanPage() {
  const [rowEdit, setRowEdit] = useState({});
  const [pageSize, setPageSize] = useState(5);

  const filterState = {
    paymentFunctionName: '',
    status: '',
  };

  const pageHeader = {
    title: 'نشان بانک',
    breadcrumb: [
      {
        href: routes.neshan.list,
        name: 'نشان اعتباری',
      },
      {
        name: 'گزارش پرداخت نشان اعتباری',
      },
    ],
  };

  /* create title excel coulemns */
  const titleExcelColumns = 'Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At';

  /*
   * use hooks for table
   */
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
  } = useTable(neshanData.data, pageSize, neshanData.totalElements, filterState);

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = (id: string) => {
    handleDelete(id);
  };

  /*
   * use options colums
   */
  const columns = React.useMemo(
    () =>
      getColumns({
        data: neshanData,
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

  /*
   * filterable form input
   */
  const dataFilter: any = [
    {
      label: 'نوع پرداخت',
      type: 'Text',
      key: 'paymentFunctionName',
    },
    {
      label: ' وضعیت پرداخت',
      type: 'Select',
      key: 'status',
      selectOption: [
        {
          name: 'موفق',
          value: '1',
        },
        {
          name: 'ناموفق',
          value: '2',
        },
      ],
    },
    {
      label: ' تاریخ پرداخت',
      type: 'DatePicker',
      key: 'date',
    },
  ];

  return (
    <Table
      pageHeader={pageHeader}
      buttons={['export', 'import']}
      filterElement={() =>
        FilterElement({
          isFiltered,
          handleReset,
          filters,
          updateFilter,
          dataFilter,
        })
      }
      getColumns={getColumns}
      expandedRow={(rowData: any) => detail(rowData)}
      paginatorOptions={{
        pageSize,
        setPageSize,
        total: neshanData?.totalElements,
        current: currentPage,
        onChange: (page: number) => handlePaginate(page),
      }}
      data={neshanData.data}
      expandedKeys={[rowEdit]}
      onExpand={(expanded: boolean, row: any) => {
        expanded ? setRowEdit(row.id) : setRowEdit({});
      }}
      columns={columns}
      handleSearch={handleSearch}
      searchTerm={searchTerm}
      tableData={tableData}
      fileTitles={titleExcelColumns}
    />
  );
}
