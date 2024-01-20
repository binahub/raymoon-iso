'use client';
import { ActionIcon, Badge, Text, Title, Tooltip } from 'rizzui';
import Link from 'next/link';
import { routes } from '@/config/routes';
import { HeaderCell } from '@/components/ui/table';
import PencilIcon from '@/components/icons/pencil';
import EyeIcon from '@/components/icons/eye';
import DeletePopover from '@/app/shared/delete-popover';
import BasicTablePage from '../custom-table/table';
import FilterElement from '../custom-table/filter';
import { detail } from './detail';
import React, { useEffect, useState } from 'react';
import { useTable } from '@/hooks/use-table';
import { useCategoryListMutation } from '@/provider/redux/query/Category';
import TableAvatar from '@/components/ui/avatar-card';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { PiXBold } from 'react-icons/pi';
import {neshanData} from '../data'

export default function NeshanPage() {
  const [rowEdit, setRowEdit] = useState({});
  const [pageNumer, setPageNumer] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [isLink, setIsLink] = useState(false);
  const [isModal, setIsModal] = useState(true);
  const { openModal } = useModal();


  
function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
      case 'موفق':
        return (
          <div className="flex items-center">
            <Badge color="success" renderAsDot />
            <Text className="ms-2 font-medium text-green-dark">{status}</Text>
          </div>
        );
        case 'ناموفق':
          return (
          <div className="flex items-center">
            <Badge color="danger" renderAsDot />
            <Text className="ms-2 font-medium text-red-dark">{status}</Text>
          </div>
        );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}

  const filterState = {
    name: '',
    // description:'',
    // status:[]
  };

  const parameterMap = {
    parameterMap: {
      page: pageNumer,
      size: pageSize,
      orderBy: 'id',
      sort: 'asc',
    },
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


  console.log('neshanData :' ,neshanData);
  

  const getColumns = ({}: any) => [
    {
      title: <HeaderCell title="نوع پرداخت" />,
      dataIndex: 'paymentFunctionName',
      key: 'paymentFunctionName',
      width:30,
      render: (value: string) => <p>{value}</p>,
    },
    {
      title: (
        <HeaderCell
          title="مبلغ" 
          ellipsis
          sortable
          ascending={
            sortConfig?.direction === 'asc' && sortConfig?.key === 'amount'
          }
        />
      ),
      onHeaderCell: () => onHeaderCellClick('amount'),
      dataIndex: 'amount',
      key: 'amount',
      width: 30,
      render: (value: string) => (
        <Text className="font-medium text-gray-700">{value}ریال</Text>
      ),
    },
    {
      title: <HeaderCell title="شماره کارت اعتباری" />,
      dataIndex: 'creditCardNumber',
      key: 'creditCardNumber',
      width: 30,
      render: (value: string) => <p>{value}</p>,
    },
    {
      title: <HeaderCell title="  وضعیت پرداخت" />,
      dataIndex: 'status',
      key: 'status',
      width: 40,
      render: (value: string) => getStatusBadge(value),
    },
    {
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
            {isModal ? (
              <ActionIcon
                tag="span"
                size="sm"
                variant="outline"
                aria-label={'ویرایش'}
                className="hover:text-gray-700"
                onClick={() =>
                  openModal({
                    view: <ModalView />,
                    customSize: '720px',
                  })
                }
              >
                <PencilIcon className="h-4 w-4" />
              </ActionIcon>
            ) : (
              <Link href={routes.iva.add}>
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
            )}
          </Tooltip>
          <Tooltip
            size="sm"
            content={() => 'دیدن جزئیات بیشتر'}
            placement="top"
            color="invert"
          >
            {isLink ? (
              <Link href={routes.iva.add}>
                <ActionIcon
                  tag="span"
                  size="sm"
                  variant="outline"
                  aria-label={'دیدن جزئیات بیشتر'}
                  className="hover:text-gray-700"
                  onClick={() => setRowEdit((prev) => (prev ? null : row.id))}
                >
                  <EyeIcon className="h-4 w-4" />
                </ActionIcon>
              </Link>
            ) : (
              <ActionIcon
                tag="span"
                size="sm"
                variant="outline"
                aria-label={'دیدن جزئیات بیشتر'}
                className="hover:text-gray-700"
                onClick={() => setRowEdit((prev) => (prev ? null : row.id))}
              >
                <EyeIcon className="h-4 w-4" />
              </ActionIcon>
            )}
          </Tooltip>
          <DeletePopover
            title={`آیا مطمئن هستید؟`}
            description={`انجام این عملیات غیرقابل بازگشت می باشد.`}
            onDelete={() => {}}
          />
        </div>
      ),
    },
  ];

  const [list, { isLoading, isSuccess, isError, error, data }] =
    useCategoryListMutation();

  useEffect(() => {
    list(parameterMap);
  }, [pageNumer, pageSize]);

  function ModalView() {
    const { closeModal } = useModal();
    return (
      <div className="m-auto px-5 pb-8 pt-5 @lg:pt-6 @2xl:px-7">
        <div className="mb-7 flex items-center justify-between">
          <Title as="h4" className="font-semibold">
            ویرایش جزئیات
          </Title>
          <ActionIcon size="sm" variant="text" onClick={() => closeModal()}>
            <PiXBold className="h-auto w-5" />
          </ActionIcon>
          <>{() => detail(data)}</>
        </div>
      </div>
    );
  }

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
  } = useTable(
    neshanData,
    pageSize,
    data?.totalElements,
    filterState
  );

  console.log(tableData);
  

  useEffect(() => {
    setPageNumer(currentPage - 1);
  }, [currentPage]);

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

  const dataFilter: any = [
    {
      label: 'نام',
      type: 'Text',
      key: 'name',
    },
    // {
    //   label: 'توضیحات',
    //   type: 'Text',
    //   key: 'description',
    // },
    // {
    //   label: 'وضعیت',
    //   type: 'Select',
    //   key: 'status',
    //   selectOption: [
    //     {
    //       name: 'فعال',
    //       value: '1',
    //     },
    //     {
    //       name: 'غیرفعال',
    //       value: '2',
    //     },
    //   ],
    // },
  ];

  const parameterMapFilter = {...parameterMap , ...filters}
  
  const actionFilter = () =>{
    list( parameterMapFilter)  
  }


  return (
    <BasicTablePage
      pageHeader={pageHeader}
      buttons={['export', 'import']}
      filterElement={() =>
        FilterElement({
          isFiltered,
          handleReset,
          filters,
          updateFilter,
          dataFilter ,
          actionFilter
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
      data={neshanData}
      expandedKeys={[rowEdit]}
      onExpand={(expanded: boolean, row: any) => {
        expanded ? setRowEdit(row.id) : setRowEdit({});
      }}
      isLoading={isLoading}
      columns={columns}
      handleSearch={handleSearch}
      searchTerm={searchTerm}
      tableData={tableData}
      fileTitles={
        'Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At'
      }
    />
  );
}
