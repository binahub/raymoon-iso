'use client';
import {ExportButton, Tab, Card } from 'shafa-bo';

function page() {
  const WalletContent = () => <div className='p-4 mt-8'>محتوای کیف پول</div>;
  const ReportContent = () => (
    <div className='p-4 mt-8'>
      <ExportButton header='ddvd' data={[]} fileName='aaa' />
    </div>
  );
  const InfoContent = () => <div className='p-4 mt-8'>جزییات</div>;

  const tabsList = [
    { name: 'کیف پول', content: <WalletContent /> },
    { name: 'گزارش تراکنش', content: <ReportContent /> },
    { name: 'اطلاعات کاربر', content: <InfoContent /> },
  ];
  return (
    <Card className='h-[88%]'>
      <Tab tabsList={tabsList} className='w-[8rem]' />
    </Card>
  );
}

export default page;
