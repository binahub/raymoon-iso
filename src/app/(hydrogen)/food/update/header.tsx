import { routes } from "@/config/routes";

export const pageHeader = {
  title: 'سفارش غذا',
  breadcrumb: [
    {
      href: routes.food.list,
      name: 'لیست سفارشات غذا',
    },
    {
      name: 'ویرایش',
    },
  ],
};