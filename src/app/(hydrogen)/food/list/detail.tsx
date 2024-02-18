/* show more details in expect table (readOnly) */

'use client ';
import { Input } from '@/components/ui/input';

type Props = {
  record: {
    name: string;
    description: string;
  };
};

export function detail(rowData: Props) {
  return (
    <div className='my-10 flex justify-center'>
      <div className=' grid w-[70%] grid-cols-2 gap-5 rounded-2xl border border-gray-100 bg-white dark:bg-gray-100 p-12'>
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
      </div>
    </div>
  );
}
