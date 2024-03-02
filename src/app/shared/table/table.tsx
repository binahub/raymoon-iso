'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { ActionIcon } from '@/components/ui/action-icon';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';
import { useColumn } from '@/hooks/use-column';
import { ControlledTable } from './controlled-table';
import TableLayout from './table-layout';
import cn from '@/utils/class-names';
import Card from '@/components/cards/card';

type LayoutTable = {
  pageHeader?: {
    title?: string;
    breadcrumb: { name: string; href?: string }[];
  };
  filterElement?: any;
  buttons?: ReactNode;
  hasExportFile?: boolean;
  data?: any;
  searchable?: boolean;
  expandedRow?: Function;
  getColumns: Function;
  enablePagination?: boolean;
  paginatorOptions?: any;
};
function CustomExpandIcon(props: any) {
  return (
    <ActionIcon
      size='sm'
      variant='outline'
      rounded='full'
      className='expand-row-icon ms-2'
      onClick={(e) => {
        props.onExpand(props.record, e);
      }}
    >
      {props.expanded ? (
        <PiCaretUpBold className='h-3.5 w-3.5' />
      ) : (
        <PiCaretDownBold className='h-3.5 w-3.5' />
      )}
    </ActionIcon>
  );
}

type ColumnTypes = {
  data?: any[];
  sortConfig?: any;
  checkedItems?: string[];
  handleSelectAll?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

type BasicTableWidgetProps = {
  title?: React.ReactNode;
  className?: string;
  getColumns: ({
    data,
    sortConfig,
    checkedItems,
    handleSelectAll,
    onDeleteItem,
    onHeaderCellClick,
    onChecked,
  }: ColumnTypes) => any;
  data: any[];
  expandedRow: any;
  filterElement?: any;
  variant?: 'modern' | 'minimal' | 'classic' | 'elegant' | 'retro';
  paginatorClassName?: string;
  searchPlaceholder?: string;
  noGutter?: boolean;
  scroll?: {
    x?: number;
    y?: number;
  };
  sticky?: boolean;
  expadable?: boolean;
  paginatorOptions?: any;
  exportColumns?: string;
  exportFileName?: any;
  requiredSeachTable?: boolean;
  countFilter?: number
};




export default function Table({
  pageHeader,
  buttons,
  hasExportFile,
  data,
  variant = 'modern',
  noGutter,
  sticky,
  scroll = { x: 1000 },
  expandedRow: ExpandedRow,
  onExpand,
  expandedKeys,
  filterElement: FilterElement,
  paginatorOptions,
  isLoading,
  columns,
  handleSearch,
  searchTerm,
  isFiltered,
  filters,
  updateFilter,
  handleReset,
  tableData,
  exportColumns,
  exportFileName,
  requiredSeachTable,
  countFilter
}: any) {
  const { visibleColumns, checkedColumns, setCheckedColumns } = useColumn(columns);  

  return (
    <>
      {requiredSeachTable  ?  (
        <Card className='rounded-b-3xl'>
          <div className={cn('table-wrapper flex-grow p-8', noGutter && '-mx-5 lg:-mx-7')}>
            <ControlledTable
              isLoading={isLoading}
              data={tableData}
              columns={visibleColumns}
              expandable={
                ExpandedRow
                  ? {
                      expandIcon: CustomExpandIcon,
                      expandedRowRender: (record: any) => <ExpandedRow record={record} />,
                      expandedRowKeys: expandedKeys,
                      onExpand: onExpand,
                    }
                  : {}
              }
              scroll={scroll}
              sticky={sticky}
              variant={variant}
              className='mt-4'
              paginatorOptions={paginatorOptions ? paginatorOptions : {}}
              filterOptions={{
                searchTerm,
                onSearchClear: () => {
                  handleSearch('');
                },
                onSearchChange: (event: any) => {
                  handleSearch(event.target.value);
                },
                hasSearched: isFiltered,
                hideIndex: 1,
                columns,
                checkedColumns,
                setCheckedColumns,
                enableDrawerFilter: true,
                requiredSeachTable: requiredSeachTable,
                data: {tableData},
                fileName: exportFileName,
                header: exportColumns,
              }}
              filterElement={
                FilterElement && (
                  <FilterElement
                    onSearch={handleSearch}
                    searchTerm={searchTerm}
                    isFiltered={isFiltered}
                    filters={filters}
                    updateFilter={updateFilter}
                    handleReset={handleReset}
                    countFilter={countFilter}
                  />
                )
              }
            />
          </div>
        </Card>
      ) : (
        <TableLayout
          title={pageHeader?.title}
          breadcrumb={pageHeader?.breadcrumb}
          data={tableData}
          fileName={exportFileName}
          header={exportColumns}
          buttons={buttons}
          hasExportFile={hasExportFile}
        >
          <Card className='rounded-b-3xl'>
            <div className={cn('table-wrapper flex-grow p-8', noGutter && '-mx-5 lg:-mx-7')}>
              <ControlledTable
                isLoading={isLoading}
                data={tableData}
                columns={visibleColumns}
                expandable={
                  ExpandedRow
                    ? {
                        expandIcon: CustomExpandIcon,
                        expandedRowRender: (record: any) => <ExpandedRow record={record} />,
                        expandedRowKeys: expandedKeys,
                        onExpand: onExpand,
                      }
                    : {}
                }
                scroll={scroll}
                sticky={sticky}
                variant={variant}
                className='mt-4'
                paginatorOptions={paginatorOptions ? paginatorOptions : {}}
                filterOptions={{
                  searchTerm,
                  onSearchClear: () => {
                    handleSearch('');
                  },
                  onSearchChange: (event: any) => {
                    handleSearch(event.target.value);
                  },
                  hasSearched: isFiltered,
                  hideIndex: 1,
                  columns,
                  checkedColumns,
                  setCheckedColumns,
                  enableDrawerFilter: true,
                  requiredSeachTable: requiredSeachTable,
                }}
                filterElement={
                  FilterElement && (
                    <FilterElement
                      onSearch={handleSearch}
                      searchTerm={searchTerm}
                      isFiltered={isFiltered}
                      filters={filters}
                      updateFilter={updateFilter}
                      handleReset={handleReset}
                      countFilter={countFilter}
                    />
                  )
                }
              />
            </div>
          </Card>
        </TableLayout>
      )}
    </>
  );
}
