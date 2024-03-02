import { routes } from '@/config/routes';
import {
  PiShoppingCart,
  PiHeadset,
  PiPackage,
  PiChartBar,
  PiSquaresFour,
  PiGridFour,
  PiFeather,
  PiMapPinLine,
  PiUserGear,
  PiBellSimpleRinging,
  PiEnvelopeSimpleOpen,
  PiCreditCard,
  PiBinoculars,
  PiFolderNotch,
  PiBriefcase,
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const berylliumSidebarMenuItems = [
  // label start
  {
    name: 'خانه',
  },
  // label end
  {
    name: 'داشبورد',
    href: '/',
    icon: <PiFolderNotch />,
    badge: 'New',
  },
  {
    name: 'تنظیمات منو',
    href: routes.reactTreeSample,
    icon: <PiBriefcase />,
  },
  {
    name: 'دسترسی کاربران',
    href: routes.checkboxTree,
    icon: <PiPackage />,
    badge: 'Update',
  },
  {
    name: 'نشان اعتباری',
    href: '#',
    icon: <PiShoppingCart />,
    dropdownItems: [
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
    icon: <PiChartBar />,
    href: '#',
    dropdownItems: [
      {
        name: 'گزارش سفارش غذاها',
        href: routes.food.list,
      },
    ],
  },
  {
    name: 'نمونه',
    href: '#',
    icon: <PiHeadset />,
    dropdownItems: [
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
  // label start
  {
    name: 'ایوا',
  },
  // label end
  {
    name: 'خطاهای شاپرکی',
    href: '#',
    icon: <PiShoppingCart />,
    dropdownItems: [
      {
        name: 'افزودن',
        href: routes.neshan.list,
      },
      {
        name: 'گزارش',
        href: routes.neshan.add,
      },
    ],
  },
  {
    name: 'پذیرنده ایوا',
    icon: <PiChartBar />,
    href: '#',
    dropdownItems: [
      {
        name: 'افزودن',
        href: routes.neshan.add,
      },
    ],
  },
  {
    name: 'پشتیبانی',
    href: routes.neshan.add,
    icon: <PiSquaresFour />,
    badge: 'Update',
  },
  // label start
  {
    name: 'نشان',
  },
  // label end
  {
    name: 'نشان اعتباری',
    href: '#',
    icon: <PiShoppingCart />,
    dropdownItems: [
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
    icon: <PiChartBar />,
    href: '#',
    dropdownItems: [
      {
        name: 'گزارش سفارش غذاها',
        href: routes.food.list,
      },
    ],
  },
  {
    name: 'افتتاح حساب',
    href: routes.accessDenied,
    icon: <PiShoppingCart />,
    badge: 'Update',
  },
  {
    name: 'کارت اعتباری',
    href: routes.accessDenied,
    icon: <PiBellSimpleRinging />,
    badge: '',
  },
  // label start
  {
    name: 'کیف پول',
  },
  // label end
  {
    name: 'کیف پول مرجع',
    href: routes.accessDenied,
    icon: <PiCreditCard />,
  },
  {
    name: 'کیف به کیف',
    href: routes.accessDenied,
    icon: <PiGridFour />,
  },
  // label start
  {
    name: 'اپلیکیشن',
  },
  // label end
  {
    name: 'مدیریت سرویس ها',
    href: routes.accessDenied,
    icon: <PiBinoculars />,
  },
  {
    name: 'مدیریت بنرها',
    href: routes.accessDenied,
    icon: <PiCreditCard />,
    badge: 'New',
  },
  {
    name: 'مدیریت دسته بندی ها',
    href: routes.accessDenied,
    icon: <PiBellSimpleRinging />,
  },
  {
    name: 'مدیریت تبلیغ ها',
    href: routes.accessDenied,
    icon: <PiFeather />,
  },
  // label start
  {
    name: 'پنل',
  },
  // label end

  {
    name: 'مدیریت کاربران',
    href: routes.accessDenied,
    icon: <PiUserGear />,
  },
  {
    name: 'مدیریت نقش ها',
    href: routes.accessDenied,
    icon: <PiMapPinLine />,
  },
  {
    name: 'مدیریت دسترسی ها',
    href: routes.accessDenied,
    icon: <PiBinoculars />,
  },
  {
    name: 'تنظیمات منو',
    href: routes.accessDenied,
    icon: <PiEnvelopeSimpleOpen />,
  },
];
