'use client';
import SortableTree from '@nosferatu500/react-sortable-tree';
import '@nosferatu500/react-sortable-tree/style.css';
import { data } from './data.json';
import { useState } from 'react';
import { Button, PageHeader, Card } from 'shafa-bo';
import { routes } from '@/config/routes';

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
