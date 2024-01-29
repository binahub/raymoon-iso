'use client';
import WidgetCard from '@/components/cards/widget-card';
import SweetAlert from '@/components/ui/sweet-alert';
import { Button } from 'rizzui';

function page() {
  return (
    <div>
      <WidgetCard title='component using'>
        <Button
          onClick={
            () =>
              SweetAlert({
                type: 'error',
                message: 'خطایی رخ داده است.',
                cancelButtonText: 'ای بابا',
              })
            // Notification.success("با موفقیت انجانم شد.")
          }
        >
          click to see sweet alert
        </Button>
      </WidgetCard>
    </div>
  );
}

export default page;
