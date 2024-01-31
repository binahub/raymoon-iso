'use client';

import { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Input, cn } from 'rizzui';
import { PiCalendarBlank, PiCaretDownBold } from 'react-icons/pi';
import 'react-multi-date-picker/styles/colors/yellow.css';

export interface DatepickerProps {
  value?: DateObject | Date | string;
  placeholder?: string;
  label?: string;
  onChange?(date: any): void;
  onCalendarOpen?(): void;
  onCalendarClose?(): void;
  minDate?: DateObject | Date | string;
  maxDate?: DateObject | Date | string;
  disabled?: boolean;
  format?: string;
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
  format,
  className,
  ...props
}: DatepickerProps) => {
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
        onChange={onChange}
        format={format ? format : 'YYYY/MM/DD'}
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
