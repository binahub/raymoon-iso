'use client';

import dynamic from 'next/dynamic';
// import { getColumns } from '@/app/shared/ecommerce/order/order-list/columns';
import { HeaderCell } from '@/components/ui/table';
import { routes } from '@/config/routes';
import cn from '@/utils/class-names';
import DataTable from '@/components/data-table';
import TableLayout from '@/layouts/table/table-layout';
import { useEffect } from 'react';
import { parameterMap } from '@/const/apiCalls';
import { useCategoryListMutation } from '@/provider/redux/apis/category.api';
import TableAvatar from '@/components/ui/avatar-card';
import Link from 'next/link';
import { Tooltip } from '@/components/ui/tooltip';
import { ActionIcon } from '@/components/ui/action-icon';
import EyeIcon from '@/components/icons/eye';
import PencilIcon from '@/components/icons/pencil';
import DeletePopover from '@/app/shared/delete-popover';
import SweetAlert from '@/components/ui/sweet-alert';
// dynamic import
const FilterElement = dynamic(
  () => import('@/app/shared/ecommerce/order/order-list/filter-element'),
  { ssr: false }
);

const pageHeader = {
  title: 'Collapsible Table',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      name: 'Tables',
    },
    {
      name: 'Collapsible',
    },
  ],
};

type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};

export const getColumns = ({}: Columns) => [
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
          content={() => 'Edit Order'}
          placement="top"
          color="invert"
        >
          <Link href={routes.eCommerce.editOrder(row.id)}>
            <ActionIcon
              tag="span"
              size="sm"
              variant="outline"
              aria-label={'Edit Order'}
              className="hover:text-gray-700"
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <Tooltip
          size="sm"
          content={() => 'View Order'}
          placement="top"
          color="invert"
        >
          <Link href={routes.eCommerce.orderDetails(row.id)}>
            <ActionIcon
              tag="span"
              size="sm"
              variant="outline"
              aria-label={'View Order'}
              className="hover:text-gray-700"
            >
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <DeletePopover
          title={`Delete the order`}
          description={`Are you sure you want to delete this #${row.id} order?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
  // {
  //   title: <HeaderCell title="حذف" />,
  //   dataIndex: 'name',
  //   key: 'name',
  //   width: 90,
  //   render: (value: string) => <button onClick={onDeleteItem}>#{value}</button>,
  // },
];

const filterState = {
  price: ['', ''],
  createdAt: [null, null],
  updatedAt: [null, null],
  status: '',
  name: '',
};
const onDeleteItem = (id: number) => {
  alert('salam ' + id);
};

function ExpandedRow() {
  return <div>Detail</div>;
}

export default function SaberTable({
  variant = 'modern',
  className,
}: {
  variant?: 'modern' | 'minimal' | 'classic' | 'elegant' | 'retro';
  className?: string;
}) {
  const [list, { isLoading, isSuccess, isError, error, data: cat }] =
    useCategoryListMutation();
  useEffect(() => {
    list(parameterMap);
  }, [list]);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">loading...</div>
    );
  }

  if (isError) {
    SweetAlert({
      message: 'آیا مطمئن هستید؟',
      confirmButtonText: 'باشه!',
      title: 'هشدار',
      type: 'error',
    });
  }
  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={cat?.foodCategoryObjectList}
      fileName="order_data"
      header="id,name"
      buttons={['export', 'import', 'create']}
    >
      <div className={cn(className)}>
        <DataTable
          data={cat?.foodCategoryObjectList}
          expandedRow={ExpandedRow}
          filterElement={FilterElement}
          filterState={filterState}
          getColumns={getColumns}
        />
      </div>
    </TableLayout>
  );
}
