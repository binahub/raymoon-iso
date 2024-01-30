'use client';
import WidgetCard from '@/components/cards/widget-card';
import SweetAlert from '@/components/ui/sweet-alert';
import Notification from '@/utils/notification';
import { Button } from 'rizzui';

function page() {
  return (
    <div>
      <WidgetCard title='using sweet alert' className='flex flex-col'>
        <Button
          className='my-4 w-40'
          onClick={() =>
            SweetAlert({
              type: 'info',
              message: 'تغییرات انجام شد.',
              confirmFlow: () => console.log('انجام شد.'),
            })
          }
        >
          info sweet alert
        </Button>
        <Button className='mb-4 w-40' onClick={() => Notification.success('با موفقیت انجام شد.')}>
          success sweet alert
        </Button>
        <Button className='mb-4 w-40' onClick={() => Notification.error('خطایی رخ داده است.')}>
          error sweet alert
        </Button>
        <Button
          className='mb-4 w-40'
          onClick={() =>
            SweetAlert({
              type: 'warning',
              message: 'موارد الزامی را تکمیل کنید.',
              cancelButtonText: 'ای بابا',
              dismissFlow: () => console.log('لغو شد.'),
            })
          }
        >
          warning sweet alert
        </Button>
      </WidgetCard>
    </div>
  );
}

export default page;
