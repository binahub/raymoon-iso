import { routes } from "@/config/routes";

export const pageHeader = {
    title: 'سفارش غذا',
    breadcrumb: [
      {
        href: routes.food.create,
        name: ' افزودن غذا به لیست ',
      },
  
      {
        name: 'ایجاد',
      },
    ],
  };