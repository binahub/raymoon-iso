'use client';
import React from 'react';
import StatusField from '@/components/controlled-table/status-field';
import { Input } from '@/components/ui/input';
import { DatePicker } from '@/components/ui/datepicker';
import { Button } from 'rizzui';
import { PiTrashDuotone } from 'react-icons/pi';

type FilterElementProps = {
  isFiltered?: boolean;
  filters: { [key: string]: any };
  updateFilter: (columnId: string, filterValue: string | any[]) => void;
  handleReset: () => void;
  dataFilter: any;
  actionFilter: any
};

export default function FilterElement({
  isFiltered,
  handleReset,
  filters,
  updateFilter,
  dataFilter,
  actionFilter
}: FilterElementProps) {
  function getElementForm(item: any) {
    switch (item.type) {
      case 'Text':
        return (
          <Input
            type="text"
            label={item.label}
            color="info"
            value={filters[item.key]}
            onChange={(event) => {
              updateFilter(item.key, event.target.value);
            }}
            // onChange={(event)=> event.target.value}
            autoFocus
            className='py-2'
            // {...register('email')}
            // error={errors.email?.message}
          />
        );
      case 'Select':
        return (
          <StatusField
            options={item.selectOption}
            value={filters[item.key]}
            onChange={(value: string) => {
              updateFilter(item.key, value);
            }}
            getOptionValue={(option) => option.name}
            displayValue={(selected: string) =>
              item?.selectOption.find(
                (option: any) => option.value === selected
              )?.label ?? selected
            }
            label={item.label}
          />
        );
      case 'DatePicker':
        return (
          <DatePicker
            className="mb-5"
            inputProps={{ label: item.label }}
            dateFormat="dd/MM/yyyy"
            onChange={() => {}}
            // onBlur={onBlur}
            // selected={value}
          />
        );
      default:
        undefined;
    }
  }
  return (
    dataFilter && (
      <div className='relative'> 
        {dataFilter?.map((item: any) => <>{getElementForm(item)}</>)}
        <Button
          size="lg"
          onClick={()=>actionFilter()}
          className='absolute inset-x-0 bottom-0 text-sm  bg-blue-darkBlue'
        >
          اعمال فیلتر
        </Button>
      </div>
    )
  );
}
