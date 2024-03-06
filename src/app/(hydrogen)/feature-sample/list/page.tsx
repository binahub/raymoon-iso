'use client';
import React, { useEffect, useState } from 'react';
import { useTable } from '@/common/hooks/use-table';
import { Table, FilterElement } from 'shafa-bo';
import { Detail } from '../detail/collaps';
import { Columns } from './columns';
import { generatedFilter, initialFilterValues } from './filter';
import { headerData } from './header';
import ImportButton from '@/app/shared/import-button';
import PrintButton from '@/app/shared/print-button';
import { useCreateSample } from '@/common/apis/test-api/sample.mutation';

export default function FoodPage() {
  const [rowEdit, setRowEdit] = useState({});
  const [pageNumer, setPageNumer] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  /* api call body */
  const parameterMap = {
    parameterMap: {
      page: pageNumer,
      size: pageSize,
      orderBy: 'id',
      sort: 'asc',
    },
  };

  /* api call */
  const { mutate, isPending:isLoading, data } = useCreateSample();

  /* use hooks for table*/
  const { isFiltered, filters, updateFilter, handleReset, tableData, currentPage, handleDelete, handlePaginate, setData } = useTable(
    data?.foodCategoryObjectList,
    pageSize,
    data?.totalElements,
    initialFilterValues
  );

  useEffect(() => {
    setPageNumer(currentPage - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (!isLoading) {
      setData(data?.foodCategoryObjectList);
    }
    setPageNumer(currentPage - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    mutate(parameterMap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumer, pageSize]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDeleteItem = (id: string) => {
    handleDelete(id);
  };

  /* use options columns */
  const columns = React.useMemo(
    () =>
      Columns({
        onDeleteItem,
      }),
    [onDeleteItem]
  );

  /* Handel filter with my dataFilter */
  const actionFilter = (filters: any) => {
    mutate({ parameterMap: { ...parameterMap.parameterMap, ...filters } });
  };

  /* generate any ReactNode for show in layout table */
  const GenerateElement = () => {
    return <div><ImportButton title={'آپلود فایل'} /><PrintButton/></div>;
  };

  /* create title excel columns */
  const exportColumns = 'Order ID,Name';

  return (
    <Table
      pageHeader={headerData}
      /* get data from api && changes data after pagination and filter */
      tableData={tableData}
      /* get any ReactNode */
      buttons={<GenerateElement />}
      /* get columns table */
      columns={columns}
      /* show detail or ReactNode  */
      expandedRow={(rowData: any) => Detail(rowData)}
      expandedKeys={[rowEdit]}
      onExpand={(expanded: boolean, row: any) => {
        expanded ? setRowEdit(row.id) : setRowEdit({});
      }}
      /* show table pagination and handle functionality  */
      paginatorOptions={{
        pageSize,
        setPageSize,
        total: data?.totalElements,
        current: currentPage,
        onChange: (page: number) => handlePaginate(page),
      }}
      /* show filter drawer && handle filter */
      filterElement={() =>
        FilterElement({
          isFiltered,
          handleReset,
          filters,
          updateFilter,
          generatedFilter,
          actionFilter,
          isLoading,
        })
      }
      countFilter={filters}
      isLoading={isLoading}
      /* export file */
      hasExportFile
      exportFileName={'export-food-table'}
      exportColumns={exportColumns}
    />
  );
}
