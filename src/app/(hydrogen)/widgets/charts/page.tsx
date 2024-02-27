'use client';
import { routes } from '@/config/routes';
import { Button, PageHeader } from 'shafa-bo';
import ChartWidgets from '@/app/shared/chart-widgets';

const pageHeader = {
  title: 'Charts',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      name: 'Widgets',
    },
    {
      name: 'Charts',
    },
  ],
};

export default function ChartsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className='mt-4 flex items-center gap-3 @lg:mt-0'>
          <a target='_blank' href='https://recharts.org/en-US' rel='nofollow noopener noreferrer ' className='inline-flex w-full @lg:w-auto'>
            <Button tag='span' className='w-full @lg:w-auto dark:bg-gray-100 dark:text-white'>
              Learn More
            </Button>
          </a>
        </div>
      </PageHeader>

      <ChartWidgets />
    </>
  );
}
