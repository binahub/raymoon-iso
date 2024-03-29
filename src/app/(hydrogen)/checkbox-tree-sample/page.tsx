'use client';
import '@nosferatu500/react-sortable-tree/style.css';
import { CheckboxTreeData } from './data';
import CheckboxTreeComponent from '@/common/components/checkbox-tree';
import { routes } from '@/common/config/routes';
import { Card, PageHeader } from 'shafa-bo';

function List() {
  const pageHeader = {
    title: 'دسترسی کاربران',
    breadcrumb: [
      {
        href: '',
        name: 'خانه',
      },
      {
        href: routes.reactTreeSample,
        name: 'تنظیمات دسترسی',
      },
    ],
  };
  function convertToAcceptableNode(responseItems: any) {
    interface ObjModel {
      title: string;
      key: string;
      parentId: number;
      children: Array<ObjModel> | [];
      id: number;
    }
    const acceptableTree: Array<any> = [];

    responseItems.forEach(({ title, key, parentId, children, id }: ObjModel) => {
      let newObj = {};

      if (children.length > 0) {
        newObj = {
          id,
          label: title,
          value: key,
          children: convertToAcceptableNode(children),
          parentId,
        };
      } else {
        newObj = {
          id,
          label: title,
          value: key,
          parentId,
        };
      }
      acceptableTree.push(newObj);
    });
    return acceptableTree;
  }

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}></PageHeader>
      <Card>
        <CheckboxTreeComponent
          checkModel='all'
          nodes={convertToAcceptableNode(CheckboxTreeData.data)}
          checkedWithParents={(checkedItems) => checkedItems.checkedItemsIds}
          defaultChecked={[]}
        />
      </Card>
    </>
  );
}

export default List;
