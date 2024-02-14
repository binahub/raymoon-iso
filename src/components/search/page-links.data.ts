import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';

// Note: do not add href in the label object, it is rendering as label
export const pageLinks = [
  {
    name: 'لیست سفارش غذاها',
    href: routes.food.list,
  },
  //label start
  {
    name: 'نشان اعتباری',
  },
  //label end
  {
    name: 'گزارش پرداخت نشان اعتباری',
    href: routes.neshan.list,
  },
  {
    name: 'افزودن پرداخت نشان اعتباری',
    href: routes.neshan.add,
  },
  //label start
  {
    name: 'تنظیمات',
  },
  //label end
  {
    name: 'تنظیمات منو',
    href: routes.reactTreeSample,
  },
  {
    name: 'دسترسی کاربران',
    href: routes.checkboxTree,
  },
];
