'use client';
// import WidgetCard from '@/components/cards/widget-card';
import SweetAlert from '@/components/ui/sweet-alert';
import { PiCaretDownBold, PiTagLight } from 'react-icons/pi';
import {
  Button,
  Datepicker,
  Input,
  Spinner,
  WidgetCard,
  Card,
  Pagination,
  Breadcrumb,
  Checkbox,
  Collapse,
  Title,
} from 'shafa-bo';

function page() {
  const breadcrumb = [
    {
      href: '/logistics',
      name: ' نشان اعتباری ',
    },
    {
      name: 'افزودن پرداخت نشان اعتباری',
    },
  ];
  return (
    <div>
      <WidgetCard title='component using'>
        <Breadcrumb>
          {' '}
          {breadcrumb.map((item) => (
            <Breadcrumb.Item key={item.name} {...(item?.href && { href: item?.href })}>
              {item.name}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <br />
        <Checkbox />
        <Button
          onClick={() =>
            SweetAlert({
              type: 'error',
              message: 'خطایی رخ داده است.',
              cancelButtonText: 'ای بابا',
            })
          }
        >
          click to see sweet alert
        </Button>
        <Datepicker onChange={() => console.log('date changed')} />
        <Input />
        <Spinner size='sm' />
      </WidgetCard>
      <Card className='p-5'>
        <Pagination pageSize={5} total={10} />
        <Collapse
          className='border-t last-of-type:border-t-0'
          defaultOpen={true}
          header={({ open, toggle }) => (
            <div
              role='button'
              onClick={toggle}
              className='flex w-full cursor-pointer items-center justify-between py-6 font-lexend text-lg font-semibold text-gray-900'
            >
              Product Details
              <div className='flex shrink-0 items-center justify-center'>
                <PiCaretDownBold />
              </div>
            </div>
          )}
        >
          <div className='-mt-2 pb-7'>
            <ul className='space-y-2.5'>
              <li>Synthetic leather upper</li>
              <li>Cushioned footbed</li>
              <li>Textured and patterned outsole</li>
              <li>Warranty: 1 month</li>
            </ul>
            <Title as='h6' className='mt-6 font-inter text-sm font-semibold'>
              Material & Care
            </Title>
            <ul className='space-y-2.5 pt-3.5'>
              <li>Synthetic Leather</li>
              <li>EASY WIPE CLEAN</li>
            </ul>
            <div className='mt-6 flex items-start'>
              <div className='me-3 mt-1 flex shrink-0 items-center font-medium text-gray-900'>
                <PiTagLight className='me-1.5 h-[18px] w-[18px]' /> Tags:
              </div>
              <ul className='-m-1 text-gray-900'>
                <li className='m-1 inline-flex rounded-xl bg-gray-50 px-2.5 py-1 dark:bg-gray-100'>
                  Shoe
                </li>
                <li className='m-1 inline-flex rounded-xl bg-gray-50 px-2.5 py-1 dark:bg-gray-100'>
                  Fashion
                </li>
                <li className='m-1 inline-flex rounded-xl bg-gray-50 px-2.5 py-1 dark:bg-gray-100'>
                  Men
                </li>
                <li className='m-1 inline-flex rounded-xl bg-gray-50 px-2.5 py-1 dark:bg-gray-100'>
                  Nike
                </li>
              </ul>
            </div>
          </div>
        </Collapse>
      </Card>
    </div>
  );
}

export default page;
