/* show columns tabel also handel modal for show detail and handel delete */

import Link from 'next/link';
import { ActionIcon, Tooltip } from 'rizzui';
import { HeaderCell } from '@/components/ui/rizz-table';
import PencilIcon from '@/components/icons/pencil';
import { useModal } from '@/app/shared/modal-views/use-modal';
import DeletePopover from '@/app/shared/delete-popover';
import EyeIcon from '@/components/icons/eye';
import { routes } from '@/config/routes';
import { ModalView } from './update-modal';
import TableAvatar from '@/components/ui/avatar-card';

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

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
    title: <HeaderCell title='شناسه' />,
    dataIndex: 'id',
    key: 'id',
    name: 'شناسه',
    render: (value: string) => <p>{value}</p>,
  },
  {
    title: <HeaderCell title='نام' />,
    dataIndex: 'name',
    key: 'name',
    name: 'نام',
    render: (value: string) => <p>{value}</p>,
  },
  {
    title: <HeaderCell title='توضیحات' />,
    dataIndex: 'imageUrl',
    key: 'imageUrl',
    name: 'توضیحات',
    render: (_: any, row: any) => (
      <TableAvatar src={row.imageUrl} name={row.name} description={'shakiba@fateme.bina'} />
    ),
  },
  {
    title: <HeaderCell title='Actions' className='opacity-0' />,
    dataIndex: 'action',
    key: 'action',
    name: 'وضعیت',
    render: (_: string, row: any) => <RenderAction row={row} onDeleteItem={onDeleteItem} />,
  },
];

function RenderAction({
  row,
  onDeleteItem,
}: {
  row: {
    id: string;
    name: string;
    description: string;
  };
  onDeleteItem: (id: string) => void;
}) {
  const { openModal } = useModal();

  return (
    <>
      <div className='flex items-center justify-end gap-3 pe-4'>
        {/* <Tooltip size='sm' content={() => ' ویرایش با مدال'} placement='top' color='invert'>
          <ActionIcon
            tag='span'
            size='sm'
            variant='outline'
            aria-label={'ویرایش'}
            className='hover:text-gray-700'
            onClick={() =>
              openModal({
                view: <ModalView rowData={row} />,
                customSize: '720px',
              })
            }
          >
            <PencilIcon className='h-4 w-4' />
          </ActionIcon>
        </Tooltip> */}
        <Tooltip
          size='sm'
          content={() => ' ویرایش جزئیات در صفحه جدید'}
          placement='top'
          color='invert'
        >
          <Link href={routes.food.update(row.id)}>
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
