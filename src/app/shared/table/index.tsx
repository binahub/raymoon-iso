'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import isEmpty from 'lodash/isEmpty';
import RizzTable, { type TableProps } from '@/components/ui/rizz-table';
import { Title } from '@/components/ui/text';
import Spinner from '@/components/ui/spinner';
import type { TableFilterProps } from '@/components/controlled-table/table-filter';
import type { TablePaginationProps } from '@/components/controlled-table/table-pagination';
import cn from '@/utils/class-names';
import { TableSkeleton } from '@/components/skeleton/table';
const TableFilter = dynamic(() => import('@/components/controlled-table/table-filter'), {
  ssr: false,
});
const TablePagination = dynamic(() => import('@/components/controlled-table/table-pagination'), {
  ssr: false,
});

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
