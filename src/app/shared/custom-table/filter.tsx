'use client';
import React, { useEffect, useState } from 'react';
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
  actionFilter?: any;
};

export default function FilterElement({
  isFiltered,
  handleReset,
  filters,
  updateFilter,
  dataFilter,
  actionFilter,
}: FilterElementProps) {
  const [localFilter, setLocalFilter] = useState<
    { key: string; value: string }[]
  >([]);

  useEffect(() => {
    setLocalFilter(
      Object.keys(filters).map((key) => ({ key, value: filters[key] }))
    );
  }, [filters]);

  const OnChangeInput = (event: any, item: any) => {
    let data = [...localFilter];
    const finded = data.find((f) => f.key === item.key);
    if (finded) {
      finded.value = event.target.value;
    } else {
      data.push({ key: item.key, value: event.target.value });
    }
    setLocalFilter(data);
  };

  const OnChangeSelect = (value: any, item: any) => {
    let data = [...localFilter];
    const finded = data.find((f) => f.key === item.key);
    if (finded) {
      finded.value = value;
    } else {
      data.push({ key: item.key, value: value });
    }
    setLocalFilter(data);
  };

  const onClickFilter = (e: any) => {
    e.preventDefault();
    localFilter?.forEach((element: any) => {
      if (element.value === '') return;
      updateFilter(element.key, element.value);
    }); 
    
    /* for api call */
    // actionFilter()
  };

  /*
   * form generation in filter
   */
  function getElementForm(item: any) {
    switch (item.type) {
      case 'Text':
        return (
          <Input
            type="text"
            label={item.label}
            color="info"
            value={localFilter.find((f) => f.key === item.key)?.value || ''}
            onChange={(event) => OnChangeInput(event, item)}
            autoFocus
            className="mb-4 pt-2"
          />
        );
      case 'Select':
        return (
          <StatusField
            options={item.selectOption}
            value={localFilter.find((f) => f.key === item.key)?.value}
            onChange={(event) => OnChangeSelect(event, item)}
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
      <div className="relative">
        {dataFilter?.map((item: any) => <>{getElementForm(item)}</>)}
        {localFilter?.some((f) => f.value) ? (
          <Button
            size="sm"
            onClick={() => {
              setLocalFilter([]);
              handleReset();
            }}
            className="my-12 h-8 w-[100%]  bg-gray-200/70 "
            variant="flat"
          >
            <PiTrashDuotone className="me-1.5 h-[17px] w-[17px]" /> پاک کن
          </Button>
        ) : null}
        <Button
          size="lg"
          onClick={(event) =>onClickFilter(event)}
          className="absolute inset-x-0 bottom-0 bg-blue-darkBlue text-sm"
        >
          اعمال فیلتر
        </Button>
      </div>
    )
  );
}
