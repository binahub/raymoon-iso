'use client ';
import { Input } from 'shafa-bo';

type Props = {
  record: {
    name: string;
    description: string;
  };
};

export function detail(rowData: Props) {
  return (
    <div className='  w-[100%]'>
      <h5 className='w-[100%]'>جزئیات</h5>
      <div className=' grid w-[100%] grid-cols-3 gap-5 p-5'>
        <div>
          <Input
            label='نام'
            labelClassName='font-medium text-gray-900 dark:text-white'
            className='mb-5'
            defaultValue={rowData?.record?.name}
            disabled
          />
        </div>
        <div>
          <Input
            label=' توضیحات'
            labelClassName='font-medium text-gray-900 dark:text-white'
            className='mb-5'
            defaultValue={rowData?.record?.description}
            disabled
          />
        </div>
        <div>
          <Input
            label='کد پیگیری'
            labelClassName='font-medium text-gray-900 dark:text-white'
            className='mb-5'
            defaultValue={''}
            disabled
          />
        </div>
      </div>
    </div>
  );
}
