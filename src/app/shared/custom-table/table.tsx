'use client';
import TableLayout from './table-layout';
import { metaObject } from '@/config/site.config';
import React from 'react';
import { ActionIcon } from 'rizzui';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';
import { useColumn } from '@/hooks/use-column';
import WidgetCard from './widget-card';
import ControlledTable from '.';
import cn from '@/utils/class-names';

export const metadata = {
  ...metaObject('Basic Table'),
};

type LayoutTable = {
  pageHeader: {
    title?: string;
    breadcrumb: { name: string; href?: string }[];
  };
  filterElement?: any;
  buttons: string[];
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
  fileTitles: string;
};

export default function BasicTablePage({
  pageHeader,
  buttons,
  data,
  title,
  getColumns,
  variant = 'modern',
  paginatorClassName,
  noGutter,
  sticky,
  scroll = { x: 1300 },
  className,
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
  fileTitles,
  actionFilter,
}: any) {
  // console.log('filters:',filters);
  // console.log('isFiltered:',isFiltered);
  // console.log('updateFilter:',updateFilter);
  // console.log('handleReset:',handleReset);

  const { visibleColumns, checkedColumns, setCheckedColumns } = useColumn(columns);

  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={data}
      fileName='order_data'
      header={fileTitles}
      buttons={buttons}
    >
      <div
        className='h-[88%] rounded-3xl border border-gray-100 bg-white @container dark:bg-gray-100 shadow-[-10px_-10px_20px_-65px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'

        //  className="grid grid-cols-1 gap-6 3xl:gap-8 h-[88%]"
      >
        <WidgetCard
          title={title}
          className={cn('flex flex-col ', className)}
          headerClassName='widget-card-header flex-col [&>.ps-2]:ps-0 [&>.ps-2]:w-full sm:[&>.ps-2]:w-auto [&>.ps-2]:mt-3 sm:[&>.ps-2]:mt-0  '
        >
          <div className={cn('table-wrapper flex-grow ', noGutter && '-mx-5 lg:-mx-7')}>
            <ControlledTable
              isLoading={isLoading}
              data={tableData}
              columns={visibleColumns}
              expandable={
                ExpandedRow
                  ? {
                      expandIcon: CustomExpandIcon,
                      expandedRowRender: (record) => <ExpandedRow record={record} />,
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
                onSearchChange: (event) => {
                  handleSearch(event.target.value);
                },
                hasSearched: isFiltered,
                hideIndex: 1,
                columns,
                checkedColumns,
                setCheckedColumns,
                enableDrawerFilter: true,
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
                  />
                )
              }
            />
          </div>
        </WidgetCard>
      </div>
    </TableLayout>
  );
}
