'use client';

import Link from 'next/link';
import SearchWidget from '@/common/components/search/search';
import HamburgerButton from '@/common/layouts/hamburger-button';
import Logo from '@/common/components/logo';
import { PiMagnifyingGlass } from 'react-icons/pi';
import cn from '@/common/utils/class-names';
import Sidebar from '@/common/layouts/beryllium/beryllium-sidebar-drawer';
import { useIsMounted } from '@/common/hooks/use-is-mounted';
import { useWindowScroll } from '@/common/hooks/use-window-scroll';
import HeaderMenuRight from '@/common/layouts/header-menu-right';
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
        <div className='flex max-w-2xl items-center min-w-20 xl:w-auto'>
          <HamburgerButton view={<Sidebar className='static w-full 2xl:w-full' />} />
          <Link
            aria-label='Site Logo'
            href='/dashboard/isomorphic-bo-nextauth/reymoon-bo/public'
            className='me-4 shrink-0 text-gray-900 lg:me-5 xl:hidden'
          >
            <Logo iconOnly={true} />
          </Link>
          <SearchWidget
            icon={<PiMagnifyingGlass className='me-3 h-[20px] w-[20px]' />}
            className={`xl:w-[500px]  ${theme !== 'dark' ? 'xl:bg-white' : ''}   `}
          />
        </div>

        <div className='flex items-center justify-between'>
          <HeaderMenuRight />
        </div>
      </div>
    </header>
  );
}
