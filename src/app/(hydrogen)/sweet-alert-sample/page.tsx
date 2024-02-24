'use client';
import WidgetCard from '@/components/cards/widget-card';
import SweetAlert from '@/components/ui/sweet-alert';
import { Button, Datepicker, Input } from 'shafa-bo';

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
        <Datepicker />
        <Input />
      </WidgetCard>
    </div>
  );
}

export default page;
