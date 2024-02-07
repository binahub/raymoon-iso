'use client';

import React from 'react';
import isEmpty from 'lodash/isEmpty';
import RizzTable, { type TableProps } from '@/components/ui/rizz-table';
import type { TableFilterProps } from './table-filter';
import type { TablePaginationProps } from './table-pagination';
import cn from '@/utils/class-names';
import { TableSkeleton } from '@/components/skeleton/table';
import TableFilter  from './table-filter';
import TablePagination  from './table-pagination'


type ControlledTableProps = {
  isLoading?: boolean;
  showLoadingText?: boolean;
  filterElement: React.ReactElement;
  filterOptions?: TableFilterProps;
  paginatorOptions?: TablePaginationProps;
  tableFooter?: React.ReactNode;
  className?: string;
  paginatorClassName?: string;
} & TableProps;

export default function ControlledTable({
  isLoading,
  filterElement,
  filterOptions,
  paginatorOptions,
  tableFooter,
  showLoadingText,
  paginatorClassName,
  className,
  ...tableProps
}: ControlledTableProps) {
  if (isLoading) {
    return <TableSkeleton actionButton />;
  }

  return (
    <>
      {!isEmpty(filterOptions) && <TableFilter {...filterOptions}>{filterElement}</TableFilter>}

      <div className='relative'>
        <RizzTable
          scroll={{ x: 1300 }}
          rowKey={(record) => record.id}
          className={cn(className)}
          {...tableProps}
        />
        {tableFooter ? tableFooter : null}
      </div>

      {!isEmpty(paginatorOptions) && (
        <TablePagination paginatorClassName={paginatorClassName} {...paginatorOptions} />
      )}
    </>
  );
}
