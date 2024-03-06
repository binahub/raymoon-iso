'use client';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Button, Datepicker, Form, Card } from 'shafa-bo';
import { DatePickerSchema, datePickerSchema } from '@/common/utils/validators/datepicker.schema';

function page() {
  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Card className='p-5'>
        {/* using datepicker in react-hook-form */}
        <Form<DatePickerSchema> validationSchema={datePickerSchema} onSubmit={onSubmit}>
          {({ register, control, formState: { errors } }) => {
            return (
              <>
                <Controller
                  control={control}
                  name='startDate'
                  render={({ field: { value, onChange } }) => (
                    <Datepicker
                      label='تاریخ شروع'
                      value={value}
                      onChange={onChange}
                      className='w-60'
                      error={errors?.startDate}
                      // disabled
                    />
                  )}
                />
                <Button type='submit' className='mt-4'>
                  تایید
                </Button>
              </>
            );
          }}
        </Form>
        {/* using datepicker outside of a form  */}
        <Datepicker
          label='تاریخ پایان'
          onChange={(e: any) => console.log(e)}
          className='w-60 mt-8'
          exportedFormat='YYYY'
          displayFormat='YYYY/MM/DD - HH:mm'
        />
      </Card>
    </div>
  );
}

export default page;
