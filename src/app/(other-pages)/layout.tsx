'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button, cn } from 'shafa-bo';
import { usePathname, useRouter } from 'next/navigation';
import { siteConfig } from '@/config/site.config';
import { routes } from '@/config/routes';
import lighLogo from '@public/light-sadad-logo.svg';
import darkLogo from '@public/dark-sadad-logo.svg';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ignoreBackButtonRoutes = [routes.accessDenied, routes.notFound];

export default function OtherPagesLayout({ children }: { children: React.ReactNode }) {
  const { back } = useRouter();
  const pathName = usePathname();
  let notIn = !ignoreBackButtonRoutes.includes(pathName);
  const { theme } = useTheme();
  const [logo, setLogo] = useState(lighLogo);

  useEffect(() => {
    if (theme === 'dark') {
      setLogo(lighLogo);
    } else if (theme !== 'dark') setLogo(darkLogo);
  }, [theme]);

  return (
    <div className='flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-gray-50'>
      {/* sticky top header  */}
      <div className='sticky top-0 z-40 px-6 py-5 backdrop-blur-lg lg:backdrop-blur-none xl:px-10 xl:py-8'>
        <div
          className={cn(
            'mx-auto flex max-w-[1520px] items-center',
            notIn ? 'justify-between' : 'justify-center'
          )}
        >
          <Link href={'/'}>
            <Image
              src={logo}
              alt={siteConfig.title}
              // className='dark:invert'
              priority
            />
          </Link>
          {notIn && (
            <Button
              variant='outline'
              size='sm'
              className='md:h-10 md:px-4 md:text-base'
              onClick={() => back()}
            >
              بازگشت
            </Button>
          )}
        </div>
      </div>
      {children}
      {/* <SocialItems /> */}
    </div>
  );
}
