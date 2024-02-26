import { useState } from 'react';
import Link from 'next/link';
import { ActionIcon, Badge, Text, Tooltip, HeaderCell } from 'shafa-bo';
import PencilIcon from '@/components/icons/pencil';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { SnippetType } from '@/data/snippets-and-templates';
import DeletePopover from '@/app/shared/delete-popover';
import EyeIcon from '@/components/icons/eye';
import { routes } from '@/config/routes';
import { ModalView } from './edit';

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};
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

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
}: Columns) => [
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
    render: (_: string, row: any) => <RenderAction row={row} onDeleteItem={onDeleteItem} />,
  },
];

function RenderAction({
  row,
  onDeleteItem,
}: {
  row: SnippetType;
  onDeleteItem: (id: string) => void;
}) {
  const [isModal, setIsModal] = useState(true);
  const { openModal } = useModal();
  return (
    <>
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
            <Link href={routes.neshan.add}>
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
          <Link href={routes.neshan.add}>
            <ActionIcon
              tag='span'
              size='sm'
              variant='outline'
              aria-label={'دیدن جزئیات بیشتر'}
              className='hover:text-gray-700'
            >
              <EyeIcon className='h-4 w-4' />
            </ActionIcon>
          </Link>
        </Tooltip>
        <DeletePopover
          title={`آیا مطمئن هستید؟`}
          description={`انجام این عملیات غیرقابل بازگشت می باشد.`}
          onDelete={() => {}}
        />
      </div>
    </>
  );
}
