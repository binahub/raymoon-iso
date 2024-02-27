'use client';

import { cn, Avatar, Button, Popover, Title, Text } from 'shafa-bo';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const menuItems = [
  {
    name: 'پروفایل',
    href: '',
  },
  {
    name: 'تغییر رمزعبور',
    href: '',
  },
];

function DropdownMenu() {
  return (
    <div className='w-64 text-left rtl:text-right'>
      <div className='flex items-center border-b border-gray-300 px-6 pb-5 pt-6'>
        <Avatar src='https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-11.webp' name='فاطمه میرزایی' color='invert' />
        <div className='ms-3'>
          <Title as='h6' className='font-semibold'>
            فاطمه میرزایی
          </Title>
          <Text className='text-gray-600'>f.mirzaee@sadadpsp.ir</Text>
        </div>
      </div>
      <div className='grid px-3.5 py-3.5 font-medium text-gray-700'>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className='group my-0.5 flex items-center rounded-md px-2.5 py-2 hover:bg-gray-100 focus:outline-none hover:dark:bg-gray-50/50'
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className='border-t border-gray-300 px-3.5 py-3.5'>
        <Button
          className='h-auto w-full justify-start px-2.5 py-2 font-medium text-gray-700 hover:!text-red-600 hover:bg-gray-100 hover:dark:bg-gray-50/50 outline-none focus-within:text-gray-600 focus-visible:ring-0 bg-white dark:bg-gray-100'
          variant='text'
          onClick={() => signOut()}
        >
          خروج
        </Button>
      </div>
    </div>
  );
}

export default function ProfileMenu({ buttonClassName, avatarClassName }: { buttonClassName?: string; avatarClassName?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Popover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      content={() => <DropdownMenu />}
      shadow='sm'
      placement='bottom-end'
      className='z-50 p-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100'
    >
      <button
        className={cn(
          'w-9 shrink-0 rounded-full outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:translate-y-px sm:w-10',
          buttonClassName
        )}
      >
        <Avatar
          src='https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-11.webp'
          name='John Doe'
          color='invert'
          className={cn('!h-9 w-9 sm:!h-10 sm:w-10', avatarClassName)}
        />
      </button>
    </Popover>
  );
}
