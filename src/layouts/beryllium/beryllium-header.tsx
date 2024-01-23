'use client';

import Link from 'next/link';
import SearchWidget from '@/components/search/search';
import HamburgerButton from '@/layouts/hamburger-button';
import Logo from '@/components/logo';
import { PiMagnifyingGlass } from 'react-icons/pi';
import cn from '@/utils/class-names';
import Sidebar from '@/layouts/beryllium/beryllium-sidebar-drawer';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { useWindowScroll } from '@/hooks/use-window-scroll';
import HeaderMenuRight from '@/layouts/header-menu-right';
import { useTheme } from 'next-themes';

export default function Header({ className }: { className?: string }) {
  const isMounted = useIsMounted();
  const windowScroll = useWindowScroll();
  const { theme } = useTheme();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex items-center justify-between px-5 backdrop-blur-xl dark:bg-gray-50/50 xl:pe-8 my-3',
        ((isMounted && windowScroll.y) as number) > 2 ? 'card-shadow ' : '',
        className
      )}
    >
      <div className='hidden items-center gap-3 xl:flex'>
        <Link
          aria-label='Site Logo'
          href={'/'}
          className='me-4 hidden w-[155px] shrink-0 text-gray-900 lg:me-5 xl:block'
        >
          <Logo className='max-w-[155px]' />
        </Link>
      </div>

      <div className='flex w-full items-center justify-between gap-5 xl:w-[calc(100%_-_190px)] 2xl:w-[calc(100%_-_310px)] 3xl:gap-6'>
        <div
          // className={`flex max-w-2xl items-center xl:w-auto ${theme !== 'dark' ? 'bg-white' : ''} `}
          className='flex max-w-2xl items-center xl:w-auto '

        >
          <HamburgerButton view={<Sidebar className='static w-full 2xl:w-full' />} />
          <Link
            aria-label='Site Logo'
            href='/'
            className='me-4 w-9 shrink-0 text-gray-900 lg:me-5 xl:hidden'
          >
            <Logo iconOnly={true} />
          </Link>
          <SearchWidget
            icon={<PiMagnifyingGlass className='me-3 h-[20px] w-[20px]' />}
            className='xl:w-[500px]'
          />
        </div>

        <div className='flex items-center justify-between'>
          <HeaderMenuRight />
        </div>
      </div>
    </header>
  );
}
