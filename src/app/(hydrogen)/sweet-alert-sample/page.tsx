'use client';
// import WidgetCard from '@/components/cards/widget-card';
import SweetAlert from '@/components/ui/sweet-alert';
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
      </Card>
    </div>
  );
}

export default page;
