'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { ActionIcon } from '@/components/ui/action-icon';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';
import { useColumn } from '@/hooks/use-column';
import { ControlledTable } from './controlled-table';
import TableLayout from './table-layout';
import cn from '@/utils/class-names';
import Card from '@/components/cards/card';
import { useTable } from '@/hooks/use-table';
import FilterElement, { GeneratedFilterType } from './content-filter';

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

type TableProps = {
  requiredSeachTable?: boolean;
  pageHeader?: {
    title?: string;
    breadcrumb: { name: string; href?: string }[];
  };
  data: any;
  columns: any;
  handleDataChange: (parametr: any) => void;
  buttons?: any;
  isLoading: boolean;
  title?: React.ReactNode;
  className?: string;
  expandedRow?: (rowData: any) => React.JSX.Element;
  variant?: 'modern' | 'minimal' | 'classic' | 'elegant' | 'retro';
  noGutter?: boolean;
  scroll?: {
    x?: number;
    y?: number;
  };
  sticky?: boolean;
  exportFile?: {
    name: any,
    columns: string
  };
  filter?: {
    generatedFilter: GeneratedFilterType,
    initialFilterValues: any
  };
};

export default function Table({
  pageHeader,
  buttons,
  variant = 'modern',
  noGutter,
  sticky,
  scroll = { x: 1000 },
  expandedRow: ExpandedRow,
  data,
  isLoading,
  handleDataChange,
  exportFile,
  requiredSeachTable,
  filter,
  columns,
}: TableProps) {
  const [rowEdit, setRowEdit]: any = useState({});
  const [pageNumer, setPageNumer] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  /* use hooks for table*/
  const { isFiltered, filters, updateFilter, handleReset, tableData, currentPage, handleDelete, handlePaginate, setData, searchTerm } = useTable(
    data?.foodCategoryObjectList,
    pageSize,
    data?.totalElements,
    filter?.initialFilterValues
  );

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
    handleDataChange({ page: pageNumer, size: pageSize });
  }, [pageNumer, pageSize]);

  const onDeleteItem = (id: string) => {
    handleDelete(id);
  };

  /* Handel filter with my dataFilter */
  const actionFilter = (filters: any) => {
    handleDataChange(filters);
  };

  /* use options columns */
  const optionColumn = React.useMemo(
    () =>
      columns({
        onDeleteItem,
      }),
    [onDeleteItem]
  );

  const { visibleColumns, checkedColumns, setCheckedColumns } = useColumn(optionColumn);

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
                      expandedRowKeys: [rowEdit],
                      onExpand: (expanded: boolean, row: any) => {
                        expanded ? setRowEdit(row.id) : setRowEdit({});
                      },
                    }
                  : {}
              }
              scroll={scroll}
              sticky={sticky}
              variant={variant}
              className='mt-4'
              paginatorOptions={{
                pageSize,
                setPageSize,
                total: data?.totalElements,
                current: currentPage,
                onChange: (page: number) => handlePaginate(page),
              }}
              filterOptions={{
                searchTerm,
                hasSearched: isFiltered,
                hideIndex: 1,
                columns,
                checkedColumns,
                setCheckedColumns,
                enableDrawerFilter: true,
                requiredSeachTable: requiredSeachTable,
                data: { tableData },
                fileName: exportFile?.name,
                header: exportFile?.columns,
              }}
              filterElement={
                filter && (
                  <FilterElement
                    isLoading={isLoading}
                    actionFilter={actionFilter}
                    generatedFilter={filter.generatedFilter}
                    updateFilter={updateFilter}
                    isFiltered={isFiltered}
                    handleReset={handleReset}
                    filters={filters}
                  />
                )
              }
              countFilter={Object.keys(filters).filter((key) => filters[key] !== '').length}
            />
          </div>
        </Card>
      ) : (
        <TableLayout
          title={pageHeader?.title}
          breadcrumb={pageHeader?.breadcrumb}
          data={tableData}
          fileName={exportFile?.name}
          header={exportFile?.columns}
          buttons={buttons}
          hasExportFile={!!exportFile }
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
                        expandedRowKeys: [rowEdit],
                        onExpand: (expanded: boolean, row: any) => {
                          expanded ? setRowEdit(row.id) : setRowEdit({});
                        },
                      }
                    : {}
                }
                scroll={scroll}
                sticky={sticky}
                variant={variant}
                className='mt-4'
                paginatorOptions={{
                  pageSize,
                  setPageSize,
                  total: data?.totalElements,
                  current: currentPage,
                  onChange: (page: number) => handlePaginate(page),
                }}
                filterOptions={{
                  searchTerm,
                  hasSearched: isFiltered,
                  hideIndex: 1,
                  columns,
                  checkedColumns,
                  setCheckedColumns,
                  enableDrawerFilter: true,
                  requiredSeachTable: requiredSeachTable,
                }}
                filterElement={
                  filter && (
                    <FilterElement
                      isLoading={isLoading}
                      actionFilter={actionFilter}
                      generatedFilter={filter.generatedFilter}
                      updateFilter={updateFilter}
                      isFiltered={isFiltered}
                      handleReset={handleReset}
                      filters={filters}
                    />
                  )
                }
                countFilter={Object.keys(filters).filter((key) => filters[key] !== '').length}
              />
            </div>
          </Card>
        </TableLayout>
      )}
    </>
  );
}
