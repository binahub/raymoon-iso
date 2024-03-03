'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { ActionIcon } from '@/components/ui/action-icon';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';
import { useColumn } from '@/hooks/use-column';
import { ControlledTable } from './controlled-table';
import TableLayout from './table-layout';
import cn from '@/utils/class-names';
import Card from '@/components/cards/card';

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
      {props.expanded ? <PiCaretUpBold className='h-3.5 w-3.5' /> : <PiCaretDownBold className='h-3.5 w-3.5' />}
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

type FilterElementTypes = {
  isFiltered?: boolean;
  filters: { [key: string]: any };
  updateFilter: (columnId: string, filterValue: string | any[]) => void;
  handleReset: () => void;
  dataFilter: {
    label: string;
    type: 'text' | 'number' | 'email' | 'tel' | 'search' | 'datePicker' | 'select';
    key: string;
    selectOption?: any[]
  };
  actionFilter?: Function;
  setIsOpenDrawer?: any;
  isLoading?: boolean;
};

type TableProps = {
  tableData: any[];
  columns: {
    title: React.JSX.Element;
    dataIndex: string;
    name: string;
    render: (_: string, row: any) => React.JSX.Element;
  }[];
  pageHeader?: {
    title?: string;
    breadcrumb: { name: string; href?: string }[];
  };
  // filterElement?: ({ isFiltered , handleReset, filters, updateFilter, dataFilter, actionFilter, isLoading }: FilterElementTypes) => any;
  filterElement?: any;
  buttons?: any;
  hasExportFile?: boolean;
  onExpand?: any;
  expandedKeys?: any;
  isLoading?: boolean;
  handleSearch?: any;
  searchTerm?: any;
  isFiltered?: boolean;
  updateFilter?: Function;
  handleReset?: Function;
  title?: React.ReactNode;
  className?: string;
  getColumns?: ({ data, sortConfig, checkedItems, handleSelectAll, onDeleteItem, onHeaderCellClick, onChecked }: ColumnTypes) => React.ReactElement;
  expandedRow?: (rowData: any) => React.JSX.Element;
  variant?: 'modern' | 'minimal' | 'classic' | 'elegant' | 'retro';
  noGutter?: boolean;
  scroll?: {
    x?: number;
    y?: number;
  };
  sticky?: boolean;
  paginatorOptions?: any;
  exportColumns?: any;
  exportFileName?: any;
  requiredSeachTable?: boolean;
  countFilter?: any;
};

export default function Table({
  pageHeader,
  buttons,
  hasExportFile,
  variant = 'modern',
  noGutter,
  sticky,
  scroll = { x: 1000 },
  expandedRow: ExpandedRow,
  onExpand,
  expandedKeys,
  filterElement : FilterElement,
  paginatorOptions,
  isLoading,
  columns,
  handleSearch,
  searchTerm,
  isFiltered,
  updateFilter,
  handleReset,
  tableData,
  exportColumns,
  exportFileName,
  requiredSeachTable,
  countFilter,
}: TableProps) {
  const { visibleColumns, checkedColumns, setCheckedColumns } = useColumn(columns);


  return (
    <>
      {requiredSeachTable ? (
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
                data: { tableData },
                fileName: exportFileName,
                header: exportColumns,
              }}
              filterElement={
                FilterElement && <FilterElement
                 countFilter={Object.keys(countFilter).filter((key) => countFilter[key] !== '').length}
                  />
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
                  FilterElement && <FilterElement 
                  countFilter={Object.keys(countFilter).filter((key) => countFilter[key] !== '').length }
                   />
                }
              />
            </div>
          </Card>
        </TableLayout>
      )}
    </>
  );
}
