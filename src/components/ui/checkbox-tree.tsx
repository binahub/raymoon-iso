'use client';
import { useState, useEffect } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import {
  FaRegSquare,
  FaCheckSquare,
  FaRegPlusSquare,
  FaFolder,
} from 'react-icons/fa';
import {
  CiSquareCheck,
  CiSquareMinus,
  CiSquareChevLeft,
  CiSquareChevDown,
} from 'react-icons/ci';
import makeFlatItems from '@/utils/make-flat';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

const parentsOfNode = (node: Array<any>, items: any) => {
  const parents = [];

  const nodeObject = items.find((item: any) => item.value === node);

  (function findParent(nodeObj) {
    if (nodeObj.parentId) {
      const parent = items.find((item: any) => item.id === nodeObj.parentId);
      if (parent.id) {
        parents.push(parent.value);
        findParent(parent);
      }
    }
  })(nodeObject);
  return parents;
};

export interface CheckboxTreeProps {
  checkedWithParents: (p: any) => void;
  nodes: any[];
  defaultChecked: string[];
  checkModel: string;
}

export default function CheckboxTreeComponent({
  checkedWithParents,
  nodes,
  defaultChecked,
  checkModel,
  ...props
}: CheckboxTreeProps) {
  const [checked, setChecked] = useState(defaultChecked);
  const [expanded, setExpanded] = useState([]);

  const checkedWithParentsHandler = (values: any) => {
    const parents: any = [];

    const allNodes = makeFlatItems(nodes);

    values.forEach((value: any) => {
      parents.push(...parentsOfNode(value, allNodes));
    });

    const checkedItemsKeys = [...new Set([...parents, ...values])];

    const checkedItemsIds = allNodes
      .filter((node: any) => checkedItemsKeys.includes(node.value))
      .map((item: any) => item.id);

    return { checkedItemsKeys, checkedItemsIds };
  };

  useEffect(() => {
    if (defaultChecked.length > 0) {
      setChecked(defaultChecked);
      checkedWithParents(checkedWithParentsHandler(defaultChecked));
    }
  }, [defaultChecked, defaultChecked.length, checkedWithParents]);
  return (
    <>
      <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={(values) => {
          checkedWithParents(checkedWithParentsHandler(values));
          setChecked(values);
        }}
        onExpand={(values: any) => setExpanded(values)}
        icons={{
          check: <CiSquareCheck size={15} />,
          uncheck: <FaRegSquare size={15} />,
          halfCheck: <CiSquareMinus size={15} />,
          expandOpen: <CiSquareChevDown size={15} />,
          expandClose: <CiSquareChevLeft size={15} />,
          parentOpen: <FaCheckSquare size={15} />,
          parentClose: <FaRegPlusSquare size={15} />,
          leaf: <FaFolder size={15} />,
        }}
        checkModel={checkModel}
        {...props}
      />
    </>
  );
}
