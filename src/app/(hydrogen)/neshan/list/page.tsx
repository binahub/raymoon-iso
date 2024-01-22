'use client';
import { ActionIcon, Badge, Input, Text, Title, Tooltip } from 'rizzui';
import Link from 'next/link';
import { routes } from '@/config/routes';
import { HeaderCell } from '@/components/ui/table';
import PencilIcon from '@/components/icons/pencil';
import EyeIcon from '@/components/icons/eye';
import DeletePopover from '@/app/shared/delete-popover';
import BasicTablePage from '../../../shared/custom-table/table';
import FilterElement from '../../../shared/custom-table/filter';
import { detail } from './detail';
import React, { useState } from 'react';
import { useTable } from '@/hooks/use-table';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { neshanData } from '../data';
import { ModalView } from './edit';

export default function NeshanPage() {
  const [rowEdit, setRowEdit] = useState({});
  const [pageSize, setPageSize] = useState(5);
  const [isLink, setIsLink] = useState(false);
  const [isModal, setIsModal] = useState(true);
  const { openModal } = useModal();

  function getStatusBadge(status: string) {
    switch (status.toLowerCase()) {
      case 'موفق':
        return (
          <div className='flex items-center'>
            <Badge color='success' renderAsDot />
            <Text className='ms-2 font-medium text-green-dark'>{status}</Text>
          </div>
        );
      case 'ناموفق':
        return (
          <div className='flex items-center'>
            <Badge color='danger' renderAsDot />
            <Text className='ms-2 font-medium text-red-dark'>{status}</Text>
          </div>
        );
      default:
        return (
          <div className='flex items-center'>
            <Badge renderAsDot className='bg-gray-400' />
            <Text className='ms-2 font-medium text-gray-600'>{status}</Text>
          </div>
        );
    }
  }

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

  /*
   * generation columns table
   */
  const getColumns = ({}: any) => [
    {
      title: <HeaderCell title='نوع پرداخت' />,
      dataIndex: 'paymentFunctionName',
      key: 'paymentFunctionName',
      width: 30,
      render: (value: string) => <p>{value}</p>,
    },
    {
      title: (
        <HeaderCell
          title='مبلغ'
          ellipsis
          sortable
          ascending={sortConfig?.direction === 'asc' && sortConfig?.key === 'amount'}
        />
      ),
      onHeaderCell: () => onHeaderCellClick('amount'),
      dataIndex: 'amount',
      key: 'amount',
      width: 30,
      render: (value: string) => <Text className='font-medium text-gray-700'>{value}ریال</Text>,
    },
    {
      title: <HeaderCell title='شماره کارت اعتباری' />,
      dataIndex: 'creditCardNumber',
      key: 'creditCardNumber',
      width: 30,
      render: (value: string) => <p>{value}</p>,
    },
    {
      title: <HeaderCell title='  وضعیت پرداخت' />,
      dataIndex: 'status',
      key: 'status',
      width: 40,
      render: (value: string) => getStatusBadge(value),
    },
    {
      title: <HeaderCell title='Actions' className='opacity-0' />,
      dataIndex: 'action',
      key: 'action',
      width: 50,
      render: (_: string, row: any) => (
        <div className='flex items-center justify-end gap-3 pe-4'>
          <Tooltip size='sm' content={() => 'ویرایش'} placement='top' color='invert'>
            {isModal ? (
              <ActionIcon
                tag='span'
                size='sm'
                variant='outline'
                aria-label={'ویرایش'}
                className='hover:text-gray-700'
                onClick={() =>
                  openModal({
                    view: <ModalView />,
                    customSize: '720px',
                  })
                }
              >
                <PencilIcon className='h-4 w-4' />
              </ActionIcon>
            ) : (
              <Link href={routes.iva.add}>
                <ActionIcon
                  tag='span'
                  size='sm'
                  variant='outline'
                  aria-label={'ویرایش'}
                  className='hover:text-gray-700'
                >
                  <PencilIcon className='h-4 w-4' />
                </ActionIcon>
              </Link>
            )}
          </Tooltip>
          <Tooltip size='sm' content={() => 'دیدن جزئیات بیشتر'} placement='top' color='invert'>
            {isLink ? (
              <Link href={routes.iva.add}>
                <ActionIcon
                  tag='span'
                  size='sm'
                  variant='outline'
                  aria-label={'دیدن جزئیات بیشتر'}
                  className='hover:text-gray-700'
                  onClick={() => setRowEdit((prev) => (prev ? null : row.id))}
                >
                  <EyeIcon className='h-4 w-4' />
                </ActionIcon>
              </Link>
            ) : (
              <ActionIcon
                tag='span'
                size='sm'
                variant='outline'
                aria-label={'دیدن جزئیات بیشتر'}
                className='hover:text-gray-700'
                onClick={() => setRowEdit((prev) => (prev ? null : row.id))}
              >
                <EyeIcon className='h-4 w-4' />
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

  const columns = React.useMemo(
    () =>
      getColumns({
        neshanData,
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
    <BasicTablePage
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
      fileTitles={'Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At'}
    />
  );
}
