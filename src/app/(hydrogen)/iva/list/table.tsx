'use client';
import { HeaderCell } from '@/components/ui/table';
import { routes } from '@/config/routes';
import cn from '@/utils/class-names';
import DataTable from '@/components/data-table';
import TableLayout from '@/layouts/table/table-layout';
import { useEffect } from 'react';
import { parameterMap } from '@/const/apiCalls';
import { useCategoryListMutation } from '@/provider/redux/query/Category';
import Link from 'next/link';
import { Tooltip } from '@/components/ui/tooltip';
import { ActionIcon } from '@/components/ui/action-icon';
import EyeIcon from '@/components/icons/eye';
import PencilIcon from '@/components/icons/pencil';
import DeletePopover from '@/app/shared/delete-popover';
import FilterElement from "./filter"
import { datavalue } from '../add/data';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { Title } from 'rizzui';
import WidgetCard from '@/components/cards/widget-card';
// dynamic import
// const FilterElement = dynamic(
//   () => import('@/app/shared/ecommerce/order/order-list/filter-element'),
//   { ssr: false }
// );

const pageHeader = {
  title: 'مدیریت ایوا',
  breadcrumb: [
    {
      href: routes.iva.list,
      name: 'خطاهای شاپرکی',
    },
    {
      name: ' گزارش خطاها',
    },
  ],
};

type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};
// const { openModal } = useModal();

export const getColumns = ({}: Columns) => [
  {
    title: <HeaderCell title="شناسه" />,
    dataIndex: 'شناسه',
    key: 'id',
    width: 30,
    render: (value: string) => <p>{value}</p>,
  },
  {
    title: <HeaderCell title="کد خطا" />,
    dataIndex: 'کدخطا',
    key: 'errorCode',
    width: 30,
    render: (value: string) => <p>{value}</p>,
  },
  {
    title: <HeaderCell title="شرح خطا" />,
    dataIndex: 'شرح خطا',
    key: 'errorDesc',
    width: 30,
    render: (value: string) => <p>{value}</p>,
  },
  {
    title: <HeaderCell title="شماره ترمینال" />,
    dataIndex: 'شماره ترمینال',
    key: 'terminal',
    width: 30,
    render: (value: string) => <p>{value}</p>,
  },
  {
    title: <HeaderCell title="حوزه فعالیت " />,
    dataIndex: 'حوزه فعالیت',
    key: 'hActive',
    width: 30,
    render: (value: string) => <p>{value}</p>,
  },
  {
    title: <HeaderCell title="وضعیت  فعالیت " />,
    dataIndex: 'وضعیت فعالیت',
    key: 'vActive',
    width: 30,
    render: (value: string) => <p>{value}</p>,
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: 'وضعیت',
    key: 'action',
    width: 50,
    render: (_: string, row: any) => (
      <div className="flex justify-start gap-3 pe-4">
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
              aria-label={''}
              className="hover:text-gray-700"
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <Tooltip
          size="sm"
          content={() => ' دیدن جزئیات بیشتر'}
          placement="top"
          color="invert"
        >
          <Link href={routes.eCommerce.orderDetails(row.id)}>
            <ActionIcon
          // onClick={() =>
          //   openModal({
          //     view: '',
          //     customSize: '720px',
          //   })}
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
          title={`آیا مطمئن هستید؟`}
          // description={`Are you sure you want to delete this ${row.id} order?`}
          description={`انجام این عملیات غیرقابل بازگشت می باشد.`}

          onDelete={() => onDeleteItem()}
        />
      </div>
    ),
  },
];

const onDeleteItem = () => {
  alert('salam');
};

function ExpandedRow() {
  return <div>
     <Form
        onSubmit={()=>{}}
        // resetValues={reset}
        // validationSchema={customerProfileSchema}
        // useFormProps={{
        //   defaultValues: initialValues,
        // }}
        // className="mt-7 grid gap-4 md:grid-cols-2 md:gap-7 w-[50%] "
      >
        {({
          register,
          control,
          setValue,
          getValues,
          formState: { errors },
        }) => {
          console.log('errors', errors);
          return (
            <div>
              <Input
                label="کدخطا"
                labelClassName="font-medium text-gray-900 dark:text-white"
                readOnly
              />
              <Input
                label="شرح خطا"
                labelClassName="font-medium text-gray-900 dark:text-white"
                readOnly
              />
              <Input
                label="شماره مرجع"
                labelClassName="font-medium text-gray-900 dark:text-white"
                readOnly
              />
              <Input
                label="شماره ترمینال"
                labelClassName="font-medium text-gray-900 dark:text-white"
                readOnly
              />
            </div>
          );
        }}
      </Form>
  </div>;
}

export default function IvaTable({
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
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">loading...</div>
    );
  }  
  console.log(datavalue);
  
  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={datavalue}
      fileName="order_data"
      header="id,name"
      buttons={['export']}
    > 
      <div className={cn(className)}>
        <DataTable
          data={datavalue}
          expandedRow={ExpandedRow}
          filterElement={FilterElement}
          filterState={{}}
          getColumns={getColumns}
        />
      </div>
    </TableLayout>
  );
}
