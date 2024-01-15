'use client';

import React from 'react';
import StatusField from '@/components/controlled-table/status-field';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { useMedia } from '@/hooks/use-media';
import { Input } from '@/components/ui/input';
import { regions, status } from '../../iva/add/data';
import { DatePicker } from '@/components/ui/datepicker';

const statusOptions = [
  {
    value: 'completed',
    name: 'Completed',
    label: (
      <div className="flex items-center">
        <Badge color="success" renderAsDot />
        <Text className="ms-2 font-medium text-green-dark">Completed</Text>
      </div>
    ),
  },
  {
    value: 'pending',
    name: 'Pending',
    label: (
      <div className="flex items-center">
        <Badge color="warning" renderAsDot />
        <Text className="ms-2 font-medium text-orange-dark">Pending</Text>
      </div>
    ),
  },
  {
    value: 'cancelled',
    name: 'Cancelled',
    label: (
      <div className="flex items-center">
        <Badge color="danger" renderAsDot />
        <Text className="ms-2 font-medium text-red-dark">Cancelled</Text>
      </div>
    ),
  },
  {
    value: 'refunded',
    name: 'Refunded',
    label: (
      <div className="flex items-center">
        <Badge className="bg-gray-400" renderAsDot />
        <Text className="ms-2 font-medium text-gray-600">Refunded</Text>
      </div>
    ),
  },
];
// const Data = [
//   {
//     label: 'کدخطا',
//     type: 'Text',
//   },
//   {
//     label: 'وضعیت فعالیت',
//     type: 'Select',
//     selectOption: [
//       {
//         name: 'فعال',
//         value: '1',
//       },
//       {
//         name: 'غیرفعال',
//         value: '2',
//       },
//     ],
//   },
//   {
//     label: 'تاریخ ثبت',
//     type: 'DatePicker',
//   },
// ];
type FilterElementProps = {
  isFiltered?: boolean;
  filters?: { [key: string]: any };
  updateFilter?: (columnId: string, filterValue: string | any[]) => void;
  handleReset?: () => void;
  data?: any
};

export default function FilterElement({
  filters,
  updateFilter,
  handleReset,
  data 
}: FilterElementProps) {
  const isMediumScreen = useMedia('(max-width: 1860px)', false);


  console.log(data);
  

  function getElementForm(item: any) {
    switch (item.type) {
      case 'Text':
        return (
          <Input
            label={item.label}
            type="text"
            labelClassName="font-medium text-gray-900 dark:text-white"
          />
        );
      case 'Select':
        return (
          <StatusField
          options={regions}
          // value={filters['status']}
          // onChange={(value: string) => {
          //   updateFilter('status', value);
          // }}
          getOptionValue={(option) => option.name}
          displayValue={(selected: string) =>
            statusOptions.find((option) => option.value === selected)?.label ??
            selected
          }
            label={item.label}
        />
        );
        case 'DatePicker' :
          return (
            <DatePicker
            inputProps={{ label: item.label }}
            dateFormat="dd/MM/yyyy"
            onChange={()=>{}}
            // onBlur={onBlur}
            // selected={value}
          />
          )
        default : undefined
    }
  }
  return ( data &&
      <div>
      {data?.map((item : any ) => (
        <div>
          {getElementForm(item)}
        </div>
      ))}
    </div>
  );
}
