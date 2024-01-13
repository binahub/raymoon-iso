'use client';

import { Datepicker } from '@/components/ui/datepicker';
import SortableTree from '@nosferatu500/react-sortable-tree';
import '@nosferatu500/react-sortable-tree/style.css';
import { data } from './data.json';
import { useState } from 'react';

function Shakiba() {
  const finalData = data.map((item) => {
    const expandedItem = { ...item, expanded: true };
    return expandedItem;
  });

  const [treeData, setTreeData] = useState(finalData);

  return (
    <>
      <div className="d-flex rtl mb-2 w-[15rem] flex-col items-center justify-center">
        <Datepicker
          label="تقویم شکیبا"
          placeholder="انتخاب کنید..."
          minDate={new Date()}
          maxDate="1402-10-29"
          value="1402-10-30"
          // disabled
        />
      </div>
      <div className="h-[600px] bg-slate-100">
        <SortableTree
          rowDirection="rtl"
          maxDepth={1}
          canDrag={() => false}
          treeData={treeData}
          onChange={(data) => setTreeData(data)}
          generateNodeProps={({ node }) => ({
            buttons: [
              <button
                type="button"
                key={node.id}
                className="bg-blue-400"
                onClick={() => console.log(node)}
              >
                جزییات
              </button>,
            ],
          })}
        />
      </div>
    </>
  );
}

export default Shakiba;
