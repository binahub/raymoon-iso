'use client';
import Card from '@/components/cards/card';
import WidgetCard from '@/components/cards/widget-card';
import SweetAlert from '@/components/ui/sweet-alert';
import Notification from '@/utils/notification';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';

// import { Button } from 'rizzui';
import { Datepicker } from '@/components/ui/datepicker';
import { Form } from '@/components/ui/form';

function page() {

  const submitHandler = (data: any) => {
    console.log(data);
  };

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      {/* <WidgetCard title='using sweet alert' className='flex flex-col'>
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
      </WidgetCard> */}
      <Card className='p-5'>
        <Form onSubmit={onSubmit}>
          {({ register, control, setValue, getValues, formState: { errors } }) => {
            return (
              <>
                <Controller
                  control={control}
                  name='startDate'
                  render={({ field: { value, onChange } }) => (
                    <Datepicker label='start' value={value} onChange={onChange} />
                  )}
                />
                <button type='submit'>ok</button>
              </>
            );
          }}
        </Form>
      </Card>
    </div>
  );
}

export default page;
