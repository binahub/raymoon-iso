'use client';
import { Datepicker } from '@/components/ui/datepicker';
import SortableTree from '@nosferatu500/react-sortable-tree';
import '@nosferatu500/react-sortable-tree/style.css';
import { data } from './data.json';
import { useState } from 'react';
import { Button } from 'rizzui';
import WidgetCard from '@/components/cards/widget-card';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';

function List() {
  const finalData = data.map((item) => {
    const expandedItem = { ...item, expanded: true };
    return expandedItem;
  });

  const [treeData, setTreeData] = useState(finalData);

  const pageHeader = {
    title: 'تنظیمات منو',
    breadcrumb: [
      {
        href: '/',
        name: 'خانه',
      },
      {
        href: routes.checkboxTree,
        name: 'تنظیمات منو',
      },
    ],
  };

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}></PageHeader>

      <div className='d-flex rtl mb-2 w-[15rem] flex-col items-center justify-center'>
        {/* <Datepicker
          label="تقویم شکیبا"
          placeholder="انتخاب کنید..."
          minDate={new Date()}
          maxDate="1402-10-29"
          value="1402-10-30"
          // disabled
        /> */}
      </div>
      <WidgetCard
        title='منو'
        className='h-[100%] rounded-3xl border border-gray-100 bg-white @container dark:bg-gray-100 shadow-[-10px_-10px_20px_-65px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'
      >
        <div className='h-[600px]'>
          <SortableTree
            rowDirection='rtl'
            maxDepth={1}
            canDrag={() => false}
            treeData={treeData}
            onChange={(data) => setTreeData(data)}
            generateNodeProps={({ node }) => ({
              buttons: [
                <Button
                  type='button'
                  key={node.id}
                  className='h-8 w-16 bg-blue-darkBlue'
                  onClick={() => console.log(node)}
                >
                  جزییات
                </Button>,
              ],
            })}
          />
        </div>
      </WidgetCard>
    </>
  );
}

export default List;
