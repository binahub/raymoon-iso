'use client';

import { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Input, cn } from 'rizzui';
import { PiCalendarBlank, PiCaretDownBold } from 'react-icons/pi';
import 'react-multi-date-picker/styles/colors/yellow.css';
import dayjs from 'dayjs';

export interface DatepickerProps {
  value?: DateObject | Date | string;
  placeholder?: string;
  label?: string;
  onCalendarOpen?(): void;
  onCalendarClose?(): void;
  onChange?: any;
  minDate?: DateObject | Date | string;
  maxDate?: DateObject | Date | string;
  disabled?: boolean;
  displayFormat?: string;
  exportedFormat?: string;
  className?: string;
}

export const Datepicker = ({
  value,
  placeholder,
  label,
  onCalendarOpen,
  onCalendarClose,
  onChange,
  minDate,
  maxDate,
  disabled,
  displayFormat,
  exportedFormat,
  className,
  ...props
}: DatepickerProps) => {
  const changeHandler = (e: any) => {
    // onChange(dayjs(e).format('YYYY-MM-DDTHH:mm:ss' || exportedFormat));
    onChange(e)
  };

  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const handleCalenderOpen = () => {
    setIsCalenderOpen(true);
  };
  const handleCalenderClose = () => setIsCalenderOpen(false);

  return (
    <div className={className}>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={value}
        onChange={changeHandler}
        format={displayFormat ? displayFormat : 'YYYY/MM/DD'}
        containerClassName='w-full'
        calendarPosition='bottom-right'
        disableDayPicker={false}
        inputMode='none'
        monthYearSeparator='|'
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        render={
          <Input
            label={label}
            placeholder={placeholder}
            suffix={
              <PiCaretDownBold
                className={cn('h-4 w-4 text-gray-500 transition', isCalenderOpen && 'rotate-180')}
              />
            }
            prefix={<PiCalendarBlank className='h-5 w-5 text-gray-500' />}
          />
        }
        onOpen={onCalendarOpen || handleCalenderOpen}
        onClose={onCalendarClose || handleCalenderClose}
        {...props}
      />
    </div>
  );
};
