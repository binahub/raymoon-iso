'use client';
import { Tab, Card } from 'shafa-bo';
import ExportButton from '@/app/shared/export-button';

function page() {
  const tabsList = [
    { name: 'کیف پول', content: 'محتوای کیف پول' },
    { name: 'گزارش تراکنش', content: <ExportButton header='ddvd' data={[]} fileName='aaa' /> },
    { name: 'اطلاعات کاربر', content: 'جزییات' },
  ];
  return (
    <Card className='h-[88%]'>
      <Tab tabsList={tabsList} className='w-[8rem]' />
    </Card>
  );
}

export default page;
