'use client';
// import WidgetCard from '@/components/cards/widget-card';
import SweetAlert from '@/components/ui/sweet-alert';
import { Button, Datepicker, Input, Spinner, WidgetCard, Card, Pagination } from 'shafa-bo';

function page() {
  return (
    <div>
      <WidgetCard title='component using'>
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
