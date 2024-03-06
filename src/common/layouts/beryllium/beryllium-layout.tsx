'use client';

import Header from '@/common/layouts/beryllium/beryllium-header';
import BerylliumLeftSidebarFixed from '@/common/layouts/beryllium/beryllium-left-sidebar-fixed';
import cn from '@/common/utils/class-names';
import SidebarExpandable from '@/common/layouts/beryllium/beryllium-sidebar-expanded';
import { useBerylliumSidebars } from '@/common/layouts/beryllium/beryllium-utils';
import { useTheme } from 'next-themes';

export default function BerylliumLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  const { expandedLeft } = useBerylliumSidebars();

  return (
    <main className={cn('flex min-h-screen flex-grow')}>
      <BerylliumLeftSidebarFixed />
      <SidebarExpandable />
      <div
        className={`flex w-full flex-col  ${
          theme !== 'dark' ? 'bg-gradient-to-r from-neutral-50 to-slate-100' : ''
        } `}
      >
        <Header className='xl:ms-[88px]' />
        <div
          className={cn(
            'flex flex-grow flex-col gap-4 px-4 pb-6 duration-200 md:px-5 lg:pb-8  xl:pe-8 ',
            expandedLeft ? 'xl:ps-[414px]' : 'xl:ps-[110px]'
          )}
        >
          <div className='grow xl:mt-12 mr-3'>{children}</div>
        </div>
      </div>
    </main>
  );
}
