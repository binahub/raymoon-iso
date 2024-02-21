import { routes } from "@/config/routes";

export const headerData = {
    title: 'سفارش غذا',
    breadcrumb: [
      {
        href: routes.food.list,
        name: ' لیست سفارشات غذا ',
      },
      {
        name: 'جزئیات',
      },
    ],
  };