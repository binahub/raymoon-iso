import { routes } from '@/config/routes';
import OrderTable from '@/app/shared/ecommerce/order/order-list/table';
import { metaObject } from '@/config/site.config';
import TableLayout from '@/layouts/table/table-layout';
import { orderData } from '@/data/order-data';

export const metadata = {
  ...metaObject('Collapsible Table'),
};

const pageHeader = {
  title: 'دسته بندی',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'خانه',
    },
    {
      name: 'دسته بندی',
    },
    {
      name: 'لیست',
    },
  ],
};

export default function CategoryPage() {
  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={orderData}
      fileName="order_data"
      header="Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At"
    >
      <OrderTable
        data={orderData}
        variant="elegant"
        // className="[&_.table-filter]:hidden [&_.table-pagination]:hidden"
      />
    </TableLayout>
  );
}
