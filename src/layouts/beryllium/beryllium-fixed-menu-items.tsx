import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
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
  PiFeather,
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
        href: routes.executive.dashboard,
        icon: PiBinoculars,
      },
      {
        name: 'تنظیمات منو',
        description: '"Effortless Assistance at your Fingertips!"',
        href: routes.reactTreeSample,
        icon: PiUserCircle,
      },
      {
        name: 'دسترسی کاربران',
        description: '"Effortless Assistance at your Fingertips!"',
        href: routes.checkboxTree,
        icon: PiLightning,
      },
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
        name: 'سفارش غذا',
        description: '"Effortless Assistance at your Fingertips!"',
        icon: PiBeerSteinThin,
        subMenuItems: [
          {
            name: 'گزارش سفارش غذاها',
            href: routes.food.list,
          },
        ],
      },
      {
        name: 'نمونه',
        description: 'using different components as a sample',
        icon: PiUserCircle,
        subMenuItems: [
          {
            name: 'تقویم',
            href: routes.datepickerSample,
          },
          {
            name: 'اعلان',
            href: routes.sweetAlertSample,
          },
          {
            name: 'تنظیمات منو',
            href: routes.reactTreeSample,
          },
          {
            name: 'دسترسی کاربران',
            href: routes.checkboxTree,
          },
          {
            name: 'گزارش نشان',
            href: routes.neshan.list,
          },
          {
            name: 'فرم افزودن',
            href: routes.neshan.add,
          },
          {
            name: 'لیست غذاها',
            href: routes.food.list,
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
            href: routes.neshan.add,
          },
          {
            name: 'گزارش',
            href: routes.neshan.list,
          },
        ],
      },
      {
        name: 'پذیرنده ایوا',
        icon: PiCreditCard,
        subMenuItems: [
          {
            name: 'افزودن',
            href: routes.neshan.add,
          },
        ],
      },
      {
        name: 'پشتیبانی',
        href: routes.neshan.add,
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
        name: 'سفارش غذا',
        description: '"Effortless Assistance at your Fingertips!"',
        icon: PiBeerSteinThin,
        subMenuItems: [
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
        name: 'افتتاح حساب',
        href: routes.searchAndFilter.flight,
        icon: PiAirplaneTilt,
        badge: 'Update',
      },
      {
        name: 'کارت اعتباری',
        href: routes.searchAndFilter.nft,
        icon: PiPokerChip,
        badge: '',
      },
    ],
  },
  {
    id: '4',
    name: 'کیف پول',
    title: 'کیف پول',
    icon: PiPackage,
    menuItems: [
      {
        name: 'کیف پول مرجع',
        href: routes.widgets.cards,
        icon: PiSquaresFour,
      },
      {
        name: 'کیف به کیف',
        href: routes.widgets.icons,
        icon: PiFeather,
      },
      {
        name: 'سازمان ها',
        href: routes.widgets.charts,
        icon: PiChartLineUp,
      },
      {
        name: 'پرسش و پاسخ',
        href: routes.widgets.maps,
        icon: PiMapPinLine,
      },
    ],
  },
  {
    id: '5',
    name: 'اپلیکیشن',
    title: 'اپلیکیشن',
    icon: PiNotePencil,
    menuItems: [
      {
        name: 'مدیریت سرویس ها',
        href: routes.forms.profileSettings,
        icon: PiUserGear,
      },
      {
        name: 'مدیریت بنرها',
        href: routes.forms.notificationPreference,
        icon: PiBellSimpleRinging,
        badge: 'New',
      },
      {
        name: 'مدیریت دسته بندی ها',
        href: routes.forms.personalInformation,
        icon: PiUser,
      },
      {
        name: 'مدیریت تبلیغ ها',
        href: routes.forms.newsletter,
        icon: PiEnvelopeSimpleOpen,
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
        href: routes.tables.basic,
        icon: PiGridFour,
      },
      {
        name: 'مدیریت نقش ها',
        href: routes.tables.collapsible,
        icon: PiCaretCircleUpDown,
      },
      {
        name: 'مدیریت دسترسی ها',
        href: routes.tables.enhanced,
        icon: PiTable,
      },
      {
        name: 'تنظیمات منو',
        href: routes.tables.stickyHeader,
        icon: PiBrowser,
      },
    ],
  },
];
export const berylliumMenuItemAtom = atom(berylliumMenuItems[0]);
