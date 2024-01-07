'use client';


import dynamic from 'next/dynamic';
import { getColumns } from '@/app/shared/ecommerce/order/order-list/columns';
import ExpandedOrderRow from '@/app/shared/ecommerce/order/order-list/expanded-row';
import cn from '@/utils/class-names';
import DataTable from '@/components/data-table';
// dynamic import
const FilterElement = dynamic(
  () => import('@/app/shared/ecommerce/order/order-list/filter-element'),
  { ssr: false }
);

const filterState = {
  price: ['', ''],
  createdAt: [null, null],
  updatedAt: [null, null],
  status: '',
};

export default function OrderTable({
  data = [],
  variant = 'modern',
  className,
}: {
  data: any[];
  variant?: 'modern' | 'minimal' | 'classic' | 'elegant' | 'retro';
  className?: string;
}) {
 

  return (
    <div className={cn(className)}>
      <DataTable data={data} expandedRow={ExpandedOrderRow} filterElement={FilterElement} filterState={filterState} getColumns={getColumns} />
    </div>
  );
}
