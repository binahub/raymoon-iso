import { Metadata } from 'next';
import logoImg from '@public/logo.svg';
import { LAYOUT_OPTIONS } from '@/config/enums';
import logoIconImg from '@public/logo-short.svg';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export const siteConfig = {
  title: 'Isomorphic - React Typescript Admin Dashboard Template',
  description: `Isomorphic the ultimate React TypeScript Admin Template. Streamline your admin dashboard development with our feature-rich, responsive, and highly customizable solution. Boost productivity and create stunning admin interfaces effortlessly.`,
  logo: logoImg,
  icon: logoIconImg,
  mode: MODE.LIGHT,
  layout: LAYOUT_OPTIONS.BERYLLIUM,
  // TODO: favicon
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - پنل راهبری` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - پنل راهبری` : title,
      description,
      url: 'https://sadadpsp.ir/',
      siteName: 'پنل راهبری', // https://developers.google.com/search/docs/appearance/site-names
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
