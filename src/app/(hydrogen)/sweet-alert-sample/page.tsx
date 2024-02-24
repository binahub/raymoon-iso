'use client';
// import WidgetCard from '@/components/cards/widget-card';
import SweetAlert from '@/components/ui/sweet-alert';
import { Button, Datepicker, Input, Spinner, WidgetCard, Card } from 'shafa-bo';

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
      <Card height='[150px]' className='p-5'>
        salam
      </Card>
    </div>
  );
}

export default page;
