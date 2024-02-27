'use client';

import { RefObject, useState } from 'react';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { SimpleBar, BulbSolidIcon, CloudTaskIcon, FileStackIcon, BrushSolidIcon, Popover, TruckSolidIcon, Checkbox, Badge, Title } from 'shafa-bo';
import Link from 'next/link';
import { useMedia } from '@/hooks/use-media';
import { PiCheck } from 'react-icons/pi';

dayjs.extend(relativeTime);

const data = [
  {
    id: 1,
    name: 'بازپرداخت گواهی امضا',
    icon: <BrushSolidIcon />,
    unRead: true,
    sendTime: '2023-06-01T09:35:31.820Z',
  },
  {
    id: 3,
    name: 'افزودن منو جشنواره در ایوا',
    icon: <FileStackIcon />,
    unRead: false,
    sendTime: '2023-06-01T09:35:31.820Z',
  },

  {
    id: 5,
    name: 'بازپرداخت گواهی امضا',
    icon: <BrushSolidIcon />,
    unRead: true,
    sendTime: '2023-06-01T09:35:31.820Z',
  },
  {
    id: 7,
    name: 'افزودن منو جشنواره در ایوا',
    icon: <FileStackIcon />,
    unRead: false,
    sendTime: '2023-06-01T09:35:31.820Z',
  },
];

function NotificationsList({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className='w-[320px] text-left rtl:text-right sm:w-[340px] 2xl:w-[420px]'>
      <div className='mb-3 flex items-center justify-between ps-6'>
        <Title as='h5'>پیام ها</Title>
        {/* <Checkbox label="Mark All As Read" /> */}
      </div>
      <SimpleBar className='max-h-[350px]'>
        <div className='grid cursor-pointer grid-cols-1 gap-1 ps-4'>
          {data.map((item) => (
            <div
              key={item.name + item.id}
              className='group grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-md px-2 py-2 pe-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-50'
            >
              <div className='flex h-6 w-6 items-center justify-center rounded bg-gray-100/70 p-1 dark:bg-gray-50/50 [&>svg]:h-auto [&>svg]:w-5'>
                {item.icon}
              </div>
              <div className='grid grid-cols-[minmax(0,1fr)_auto] items-center'>
                <div className='w-full'>
                  <Title as='h1' className='mb-0.5 w-11/12 text-sm font-medium'>
                    {item.name}
                  </Title>
                  <span className='ms-auto whitespace-nowrap pe-8 text-xs text-gray-500'>
                    {/* @ts-ignore */}
                    {dayjs(item.sendTime).fromNow(true)}
                  </span>
                </div>
                <div className='ms-auto flex-shrink-0'>
                  {item.unRead ? (
                    <Badge renderAsDot size='lg' color='primary' className='scale-90' />
                  ) : (
                    <span className='inline-block rounded-full bg-gray-100 p-0.5 dark:bg-gray-50'>
                      <PiCheck className='h-auto w-[9px]' />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>
      <Link
        href={'#'}
        // onClick={() => setIsOpen(false)}
        className='-me-6 block px-6 pb-0.5 pt-3 text-center hover:underline'
      >
        دیدن همه موارد
      </Link>
    </div>
  );
}

export default function NotificationDropdown({ children }: { children: JSX.Element & { ref?: RefObject<any> } }) {
  const isMobile = useMedia('(max-width: 480px)', false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      content={() => <NotificationsList setIsOpen={setIsOpen} />}
      shadow='sm'
      placement={isMobile ? 'bottom' : 'bottom-end'}
      className='z-50 px-0 pb-4 pe-6 pt-5 dark:bg-gray-100 [&>svg]:hidden [&>svg]:dark:fill-gray-100 sm:[&>svg]:inline-flex'
    >
      {children}
    </Popover>
  );
}
