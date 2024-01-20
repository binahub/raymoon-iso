'use client';
import '@nosferatu500/react-sortable-tree/style.css';
import { data } from './data.json';
import CheckboxTreeComponent from '@/components/ui/checkbox-tree';
import WidgetCard from '@/components/cards/widget-card';

function List() {
  function convertToAcceptableNode(responseItems: any) {
    interface ObjModel {
      title: string;
      key: string;
      parentId: number;
      children: Array<ObjModel> | [];
      id: number;
    }
    const acceptableTree: Array<any> = [];

    responseItems.forEach(
      ({ title, key, parentId, children, id }: ObjModel) => {
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
      }
    );
    return acceptableTree;
  }

  return (
    <>
      <WidgetCard title="منوی دسترسی">
        <CheckboxTreeComponent
          checkModel="all"
          nodes={convertToAcceptableNode(data)}
          checkedWithParents={(checkedItems) => checkedItems.checkedItemsIds}
          defaultChecked={[]}
        />
      </WidgetCard>
    </>
  );
}

export default List;