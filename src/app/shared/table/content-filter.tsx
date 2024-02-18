'use client';
import { useEffect, useState } from 'react';
import { StatusField } from './status-field';
import { Input } from '@/components/ui/input';
import { Datepicker } from '@/components/ui/datepicker';
import { Button } from 'rizzui';
import { PiTrashDuotone } from 'react-icons/pi';
//test

type FilterElementProps = {
  isFiltered?: boolean;
  filters: { [key: string]: any };
  updateFilter: (columnId: string, filterValue: string | any[]) => void;
  handleReset: () => void;
  dataFilter: any;
  actionFilter?: any;
  setIsOpenDrawer?: any;
};

export default function FilterElement({
  isFiltered,
  handleReset,
  filters,
  updateFilter,
  dataFilter,
  actionFilter,
  setIsOpenDrawer,
}: FilterElementProps) {
  const [localFilter, setLocalFilter] = useState<{ key: string; value: string }[]>(
    filters ? Object.keys(filters).map((key) => ({ key, value: filters[key] })) : []
  );

  useEffect(() => {
    setLocalFilter(Object.keys(filters).map((key) => ({ key, value: filters[key] })));
  }, [filters]);

  /*
   *hendle input onchange
   */
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

  /*
   *hendle select onchange
   */
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

  /*
   *hendle datePicker onchange
   */
  const OnChangeDatePicker = (value: any, item: any) => {
    let data = [...localFilter];
    const finded = data.find((f) => f.key === item.key);
    if (finded) {
      finded.value = value;
    } else {
      data.push({ key: item.key, value: value });
    }
    setLocalFilter(data);
  };

  /*
   *hendle filter action
   */
  const onClickFilter = (e: any) => {
    e.preventDefault();
    localFilter?.forEach((element: any) => {
      updateFilter(element.key, element.value);
    });

    let tempData: any = {};
    localFilter?.forEach((element: any) => {
      tempData[element.key] = element.value;
    });

    if (actionFilter) {
      actionFilter({ ...filters, ...tempData });
    }
  };

  /*
   * form generation in filter
   */
  function getElementForm(item: any) {
    switch (item.type) {
      case 'Text':
        return (
          <Input
            type='text'
            label={item.label}
            color='info'
            value={localFilter.find((f) => f.key === item.key)?.value || ''}
            onChange={(event) => OnChangeInput(event, item)}
            autoFocus
            className='bg-white'
          />
        );
      case 'Select':
        return (
          <StatusField
            options={item.selectOption}
            value={localFilter.find((f) => f.key === item.key)?.value}
            onChange={(event: any) => OnChangeSelect(event, item)}
            getOptionValue={(option: any) => option.name}
            displayValue={(selected: string) =>
              item?.selectOption.find((option: any) => option.value === selected)?.label ?? selected
            }
            label={item.label}
          />
        );
      case 'DatePicker':
        return (
          <Datepicker
            label={item.label}
            value={localFilter.find((f) => f.key === item.key)?.value}
            onChange={(event: any) => OnChangeDatePicker(event, item)}
            // dateFormat='yyyy/MM/dd'
          />
        );
      default:
        undefined;
    }
  }

  return (
    dataFilter && (
      <div className='h-screen'>
        <div className='h-[70%]  overflow-y-auto pl-3 '>
          {dataFilter?.map((item: any, index: number) => (
            <div className='mt-5' key={index}>
              {getElementForm(item)}
            </div>
          ))}
        </div>

        <div className='h-[15%] mt-4 flex flex-col justify-end items-end'>
          {localFilter?.some((f) => f.value) ? (
            <Button
              size='sm'
              onClick={() => {
                setLocalFilter([]);
                handleReset();
              }}
              className=' h-11 w-[100%]  bg-gray-200/70 mb-6 '
              variant='flat'
            >
              <PiTrashDuotone className='me-1.5 h-[17px] w-[17px]' /> پاک کن
            </Button>
          ) : null}
          <Button
            size='lg'
            onClick={(event) => onClickFilter(event)}
            className=' bg-blue-darkBlue text-sm  w-[100%] '
          >
            اعمال فیلتر
          </Button>
        </div>
      </div>
    )
  );
}
