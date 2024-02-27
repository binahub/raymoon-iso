'use client';
import SortableTree from '@nosferatu500/react-sortable-tree';
import '@nosferatu500/react-sortable-tree/style.css';
import { TreeData } from './data';
import { useState } from 'react';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import Card from '@/components/cards/card';

function List() {
  const finalData = TreeData.data.map((item: any) => {
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
      <Card>
        <div className='h-[720px] p-8'>
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
                  className='h-8 w-16 bg-primary dark:bg-yellow-500'
                  onClick={() => console.log(node)}
                >
                  جزییات
                </Button>,
              ],
            })}
          />
        </div>
      </Card>
    </>
  );
}

export default List;
