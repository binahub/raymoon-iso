import { routes } from '@/config/routes';
import { IconType } from 'react-icons/lib';
import {
  PiAirplaneTilt,
  PiBellSimpleRinging,
  PiBinoculars,
  PiBrowser,
  PiCaretCircleUpDown,
  PiChartLineUp,
  PiCreditCard,
  PiEnvelopeSimpleOpen,
  PiGridFour,
  PiHeadset,
  PiHouse,
  PiLightning,
  PiMapPinLine,
  PiNotePencil,
  PiPackage,
  PiPokerChip,
  PiSquaresFour,
  PiTable,
  PiUser,
  PiUserCircle,
  PiUserGear,
  PiBeerSteinThin,
} from 'react-icons/pi';
import { atom } from 'jotai';

export interface SubMenuItemType {
  name: string;
  description?: string;
  href: string;
  badge?: string;
}

export interface ItemType {
  name: string;
  icon: IconType;
  href?: string;
  description?: string;
  badge?: string;
  subMenuItems?: SubMenuItemType[];
}

export interface MenuItemsType {
  id: string;
  name: string;
  title: string;
  icon: IconType;
  menuItems: ItemType[];
}

export const berylliumMenuItems: MenuItemsType[] = [
  {
    id: '1',
    name: 'خانه',
    title: 'خانه',
    icon: PiHouse,
    menuItems: [
      {
        name: 'داشبورد',
        description: '"Effortless Assistance at your Fingertips!"',
        href: routes.file.dashboard,
        icon: PiBinoculars,
      },
      {
        name: 'سفارش غذا',
        description: '"سفارش غذا"',
        icon: PiBeerSteinThin,
        subMenuItems: [
          {
            name: ' افزودن غذا',
            href: routes.food.create,
          },
          {
            name: 'لیست سفارش ',
            href: routes.food.list,
          },
          {
            name: ' استعلام سفارش غذا',
            href: routes.food.inquiry,
          },
        ],
      },
      {
        name: 'نمونه',
        description: 'نمونه ها',
        icon: PiUserCircle,
        subMenuItems: [
          {
            name: 'تنظیمات منو',
            href: routes.reactTreeSample,
          },
          {
            name: 'دسترسی کاربران',
            href: routes.checkboxTree,
          },
          {
            name: 'تقویم',
            href: routes.datepickerSample,
          },
          {
            name: 'اعلان',
            href: routes.sweetAlertSample,
          },
          {
            name: 'نمونه Tab',
            href: routes.tabSample,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'ایوا',
    title: 'ایوا',
    icon: PiLightning,
    menuItems: [
      {
        name: 'خطاهای شاپرکی',
        description: 'خطاهای شاپرکی',
        icon: PiBinoculars,
        subMenuItems: [
          {
            name: 'افزودن',
            href: routes.accessDenied,
          },
          {
            name: 'گزارش',
            href: routes.accessDenied,
          },
        ],
      },
      {
        name: 'پذیرنده ایوا',
        icon: PiCreditCard,
        subMenuItems: [
          {
            name: 'افزودن',
            href: routes.accessDenied,
          },
        ],
      },
      {
        name: 'پشتیبانی',
        href: routes.accessDenied,
        icon: PiCreditCard,
        badge: 'Update',
      },
    ],
  },
  {
    id: '3',
    name: 'نشان',
    title: 'نشان',
    icon: PiUserCircle,
    menuItems: [
      {
        name: 'نشان اعتباری',
        description: '"نشان اعتباری"',
        icon: PiHeadset,
        subMenuItems: [
          {
            name: 'گزارش پرداخت',
            href: routes.neshan.list,
          },
          {
            name: 'افزودن پرداخت',
            href: routes.neshan.add,
          },
        ],
      },
      {
        name: 'افتتاح حساب',
        href: routes.accessDenied,
        icon: PiAirplaneTilt,
        badge: 'Update',
      },
      {
        name: 'کارت اعتباری',
        href: routes.accessDenied,
        icon: PiPokerChip,
        badge: '',
      },
    ],
  },
  {
    id: '4',
    name: 'اپلیکیشن',
    title: 'اپلیکیشن',
    icon: PiNotePencil,
    menuItems: [
      {
        name: 'مدیریت سرویس ها',
        href: routes.accessDenied,
        icon: PiUserGear,
      },
      {
        name: 'مدیریت بنرها',
        href: routes.accessDenied,
        icon: PiBellSimpleRinging,
        badge: 'New',
      },
      {
        name: 'مدیریت دسته بندی ها',
        href: routes.accessDenied,
        icon: PiUser,
      },
      {
        name: 'مدیریت تبلیغ ها',
        href: routes.accessDenied,
        icon: PiEnvelopeSimpleOpen,
      },
    ],
  },
  {
    id: '5',
    name: 'ویجت',
    title: 'ویجت',
    icon: PiPackage,
    menuItems: [
      {
        name: 'کارد',
        href: routes.widgets.cards,
        icon: PiSquaresFour,
      },
      {
        name: 'نمودار',
        href: routes.widgets.charts,
        icon: PiChartLineUp,
      },
      {
        name: 'نقشه',
        href: routes.widgets.maps,
        icon: PiMapPinLine,
      },
    ],
  },
  {
    id: '6',
    name: 'پنل',
    title: 'پنل',
    icon: PiTable,
    menuItems: [
      {
        name: 'مدیریت کاربران',
        href: routes.accessDenied,
        icon: PiGridFour,
      },
      {
        name: 'مدیریت نقش ها',
        href: routes.accessDenied,
        icon: PiCaretCircleUpDown,
      },
      {
        name: 'مدیریت دسترسی ها',
        href: routes.accessDenied,
        icon: PiTable,
      },
      {
        name: 'تنظیمات منو',
        href: routes.accessDenied,
        icon: PiBrowser,
      },
    ],
  },
];
export const berylliumMenuItemAtom = atom(berylliumMenuItems[0]);
