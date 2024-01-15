'use client';
import { ActionIcon, Tooltip } from 'rizzui';
import Link from 'next/link';
import { routes } from '@/config/routes';
import { HeaderCell } from '@/components/ui/table';
import PencilIcon from '@/components/icons/pencil';
import EyeIcon from '@/components/icons/eye';
import DeletePopover from '@/app/shared/delete-popover';
import BasicTablePage from '../custom-table/table';
import FilterElement from '../custom-table/filter';
import {detail} from './detail';
import { data } from '../data';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useTable } from '@/hooks/use-table';
import { useColumn } from '@/hooks/use-column';
import { useCategoryListMutation } from '@/provider/redux/query/Category';
import { parameterMap } from '@/const/apiCalls';
import TableAvatar from '@/components/ui/avatar-card';

// SEO metadata
// export const metadata: Metadata = {
//   title: 'New Page | Isomorphic Furyroad',
// };



export default function NeshanPage() {
  const [rowEdit , setRowEdit] = useState({})
  // const [data , setData]= useState([])

  

  const pageHeader = {
    title: 'نشان بانک',
    breadcrumb: [
      {
        href: routes.neshan.list,
        name: 'پایانه',
      },
      {
        name: 'گزارش پایانه ها',
      },
    ],
  };

  // const onDetailClick = (data: any)  =>{
  //   return  (
  //     detail(data)
  //   )
    
  // }
  
  // type Columns = {
  //   sortConfig?: any;
  //   onDeleteItem: (id: string) => void;
  //   onHeaderCellClick: (value: string) => void;
  //   onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  // };
  
 const getColumns = ({}: any) => [

  {
    title: <HeaderCell title="شناسه" />,
    dataIndex: 'id',
    key: 'id',
    width: 30,
    render: (value: string) => <p>#{value}</p>,
  },
  {
    title: <HeaderCell title="Customer" />,
    dataIndex: 'imageUrl',
    key: 'imageUrl',
    width: 80,
    hidden: 'customer',
    render: (_: any, row: any) => (
      <TableAvatar
        src={row.imageUrl}
        name={row.name}
        description={'shakiba@fateme.bina'}
      />
    ),
  },
  {
    title: <HeaderCell title="نام" />,
    dataIndex: 'name',
    key: 'name',
    width: 30,
    render: (value: string) => <p>#{value}</p>,
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: 'action',
    key: 'action',
    width: 50,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={() => 'ویرایش'}
          placement="top"
          color="invert"
        >
          <Link href={routes.eCommerce.editOrder(row.id)}>
            <ActionIcon
              tag="span"
              size="sm"
              variant="outline"
              aria-label={'ویرایش'}
              className="hover:text-gray-700"
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <Tooltip
          size="sm"
          content={() => 'دیدن جزئیات بیشتر'}
          placement="top"
          color="invert"
        >
          {/* <Link href={routes.eCommerce.orderDetails(row.id)}> */}
            <ActionIcon
              tag="span"
              size="sm"
              variant="outline"
              aria-label={'دیدن جزئیات بیشتر'}
              className="hover:text-gray-700"
              onClick={()=>setRowEdit((prev) => prev ? null : row.id)}
            >
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          {/* </Link> */}
        </Tooltip>
        <DeletePopover
          title={`حذف`}
          description={`Are you sure you want to delete this #${row.id} order?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
  ];

  
  const [list, { isLoading,  isSuccess, isError, error, data }] =
    useCategoryListMutation();
 
    useEffect(() => {

    list(parameterMap); 
  }, []);





  const [pageSize, setPageSize] = useState(5);
  
  const {
    isFiltered,
    filters,
    updateFilter,
    handleReset,
    // isLoading,
    sortConfig,
    totalItems,
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
  } = useTable(data?.foodCategoryObjectList   , pageSize);  

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = (id: string) => {
    handleDelete(id);
  };

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
  
  const formData : any = [
    {
      label: 'fateme',
      type: 'Text',
    },
    {
      label: 'fateme',
      type: 'Select',
      selectOption: [
        {
          name: 'فعال',
          value: '1',
        },
        {
          name: 'غیرفعال',
          value: '2',
        },
      ],
    },
  ];


  return (
      <BasicTablePage
        pageHeader = {pageHeader}
        buttons={['export', 'import']}
        filterElement={()=> FilterElement({data: formData })}
        getColumns={getColumns}
        expandedRow={(rowData: any)=> detail(rowData)}
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: totalItems,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}      
        data={data?.foodCategoryObjectList}
        expandedKeys={[rowEdit]}
        onExpand={ (expanded:boolean , row : any )=>{
          expanded ?  setRowEdit(row.id) :
         setRowEdit({})}}
        isLoading={isLoading}
        columns={columns}
        handleSearch={handleSearch}
        isFiltered={isFiltered}
        filters={filters}
        updateFilter={updateFilter}
        handleReset={handleReset}
        searchTerm={searchTerm}
        tableData={tableData}
        fileTitles={"Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At"}
      />
  );
}
