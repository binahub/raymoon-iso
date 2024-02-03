'use client';
import '@nosferatu500/react-sortable-tree/style.css';
import { data } from './data.json';
import CheckboxTreeComponent from '@/components/ui/checkbox-tree';
import WidgetCard from '@/components/cards/widget-card';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import CustomCard from '@/components/cards/custom-card';

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
      <CustomCard>
        <CheckboxTreeComponent
          checkModel='all'
          nodes={convertToAcceptableNode(data)}
          checkedWithParents={(checkedItems) => checkedItems.checkedItemsIds}
          defaultChecked={[]}
        />
      </CustomCard>
    </>
  );
}

export default List;
