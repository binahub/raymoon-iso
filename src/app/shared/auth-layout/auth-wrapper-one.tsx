'use client';

import Link from 'next/link';
import logoImg from '@public/logo-primary.svg';
import logoImgText from '@public/logo-primary-text.svg';
import Image from 'next/image';
import { Title, Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { PiAppleLogo, PiArrowLeftBold } from 'react-icons/pi';
import { FcGoogle } from 'react-icons/fc';
import OrSeparation from './or-separation';
import toast from 'react-hot-toast';
import logo from '@public/assets/signin/logo.svg';
import { siteConfig } from '@/config/site.config';
import { useTheme } from 'next-themes';
import lighLogo from '@public/light-sadad-logo.svg';
import darkLogo from '@public/dark-sadad-logo.svg';
import { useEffect, useState } from 'react';

export default function AuthWrapperOne({
  children,
  title,
  bannerTitle,
  bannerDescription,
  description,
  pageImage,
  isSocialLoginActive = false,
  isSignIn = false,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  bannerTitle?: string;
  bannerDescription?: string;
  pageImage?: React.ReactNode;
  isSocialLoginActive?: boolean;
  isSignIn?: boolean;
}) {
  function handleSignIn() {
    toast.error(
      <Text>
        This is only demo purpose, click on the{' '}
        <Text as='b' className='font-semibold text-gray-900'>
          Sign In
        </Text>{' '}
        button to login.
      </Text>
    );
  }
  const [logo, setLogo] = useState(lighLogo);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      setLogo(lighLogo);
    } else if (theme !== 'dark') setLogo(darkLogo);
  }, [theme]);

  return (
    <>
      {/* <Link
        href={'/'}
        className="sticky start-0 top-0 z-20 flex items-center justify-center bg-blue p-3.5 text-sm font-medium text-white md:p-4 lg:hidden"
      >
        <PiArrowLeftBold />
        <Text className="ms-1 font-lexend">Back to home</Text>
      </Link> */}

      <div className=' justify-between gap-x-8 px-4 py-8 pt-10 md:pt-12 lg:flex lg:p-6 xl:gap-x-10 xl:p-7 2xl:p-10 2xl:pt-10 dark:bg-gray-100/40 h-[100vh] overflow-hidden'>
        <div className='relative flex w-full items-center justify-center lg:w-5/12 2xl:justify-end'>
          <div className=' w-full max-w-sm md:max-w-md lg:py-7 lg:ps-3 lg:pt-16 2xl:w-[630px] 2xl:max-w-none 2xl:ps-20 2xl:pt-7'>
            {/* <Link
              href={'/'}
              className="absolute -top-4 start-0 hidden p-3 text-gray-500 hover:text-gray-700 lg:flex lg:items-center 2xl:-top-7 2xl:ps-20 "
            >
              <PiArrowLeftBold />
              <b className="ms-1 font-medium">Back to home</b>
            </Link> */}
            <div className='mb-7 px-6 pt-3 text-center md:pt-0 lg:px-0 lg:text-start xl:mb-8 2xl:mb-10'>
              {/* <Link
                href={'/'}
                className="mb-6 inline-flex max-w-[168px] xl:mb-8"
              > */}
              <Image src={logo} alt='panel-logo' className='mb-12' />
              {/* <Image
                  src={logoImgText}
                  alt="Isomorphic"
                  className="ps-2.5 dark:invert"
                /> */}
              {/* </Link> */}
              <Title
                as='h2'
                className='flex flex-nowrap justify-center whitespace-pre mb-5 text-[21px] leading-snug md:text-2xl md:!leading-normal lg:mb-7 lg:text-[25px] xl:text-3xl 2xl:pe-4 2xl:text-4xl'
              >
                {title}
              </Title>
              <Text className=' leading-[1.85] text-gray-700 md:leading-loose lg:pe-8 2xl:pe-14'>
                {description}
              </Text>
            </div>
            {isSocialLoginActive && (
              <>
                <div className='grid grid-cols-1 gap-4 pb-5 md:grid-cols-2 md:pb-6 xl:gap-5 xl:pb-7 '>
                  <Button
                    onClick={() =>
                      // it should be signIn('apple')
                      handleSignIn()
                    }
                    className='h-11 w-full'
                  >
                    <PiAppleLogo className='me-2 h-4 w-4 shrink-0' />
                    <span className='truncate'>Signin With Apple</span>
                  </Button>
                  <Button
                    variant='outline'
                    onClick={() =>
                      // it should be signIn('google')
                      handleSignIn()
                    }
                    className='h-11 w-full'
                  >
                    <FcGoogle className='me-2 h-4 w-4 shrink-0' />
                    <span className='truncate'>Signin With Google</span>
                  </Button>
                </div>
                <OrSeparation title='OR' className='mb-5 2xl:mb-7' isCenter />
              </>
            )}

            {children}
          </div>
        </div>
        <div className='hidden w-7/12 items-center justify-center rounded-[20px] lg:flex xl:justify-start '>
          <div className=' text-center  2xl:block 2xl:w-[1063px] h-[100%]'>
            <div className='mx-auto mb-10 max-w-sm pt-2 2xl:max-w-lg'>
              <Title
                as='h2'
                className='mb-5 font-semibold !leading-normal lg:text-[26px] 2xl:px-10 2xl:text-[32px]'
              >
                {bannerTitle}
              </Title>
              <Text className='leading-[1.85] text-gray-700 md:leading-loose 2xl:px-6'>
                {bannerDescription}
              </Text>
            </div>
            {pageImage}
          </div>
        </div>
      </div>
    </>
  );
}
