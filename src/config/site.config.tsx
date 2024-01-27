import { Metadata } from 'next';
import lightLogo from '@public/light-sadad-logo.svg';
import darktLogo from '@public/dark-sadad-logo.svg';
import { LAYOUT_OPTIONS } from '@/config/enums';
import logoIconImg from '@public/logo-short.svg';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export const siteConfig = {
  title: 'پنل مدیریت ایوا',
  description: `پنل مدیریت ایوا`,
  icon: logoIconImg,
  mode: MODE.LIGHT,
  logo: MODE.DARK ? darktLogo : lightLogo,
  layout: LAYOUT_OPTIONS.BERYLLIUM,
  // TODO: favicon
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - پنل مدیریت ایوا` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - پنل مدیریت ایوا` : title,
      description,
      url: 'https://sadadpsp.ir/',
      siteName: 'پنل مدیریت ایوا', // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: '#', // banner image for backoffice branding
        width: 1200,
        height: 630,
      },
      locale: 'fa_IR',
      type: 'website',
    },
  };
};
