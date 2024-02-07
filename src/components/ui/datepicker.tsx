'use client';

import { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Input, cn } from 'rizzui';
import { PiCalendarBlank, PiCaretDownBold } from 'react-icons/pi';
import 'react-multi-date-picker/styles/colors/yellow.css';
import dayjs from 'dayjs';
import { FieldError } from '@/components/ui/field-error';

export interface DatepickerProps {
  value?: DateObject | Date | string;
  placeholder?: string;
  label?: string;
  onCalendarOpen?(): void;
  onCalendarClose?(): void;
  onChange: any;
  minDate?: DateObject | Date | string;
  maxDate?: DateObject | Date | string;
  disabled?: boolean;
  displayFormat?: string;
  exportedFormat?: string;
  className?: string;
  error?: any;
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
  error,
  ...props
}: DatepickerProps) => {
  const [formattedValue, setFormattedValue] = useState(value);

  const changeHandler = (e: any) => {
    setFormattedValue(e);
    const formattedDates = dayjs(e).format(exportedFormat ? exportedFormat : 'YYYY-MM-DDTHH:mm:ss');
    onChange(formattedDates);
  };

  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const handleCalenderOpen = () => {
    setIsCalenderOpen(true);
  };
  const handleCalenderClose = () => setIsCalenderOpen(false);

  const CustomInput = ({ openCalendar, value, handleValueChange }: any) => (
    <Input
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={handleValueChange}
      inputClassName={error && 'border border-red'}
      suffix={
        <PiCaretDownBold
          className={cn('h-4 w-4 text-gray-500 transition', isCalenderOpen && 'rotate-180')}
        />
      }
      prefix={<PiCalendarBlank className='h-5 w-5 text-gray-500' />}
      onFocus={() => {
        openCalendar();
      }}
    />
  );

  return (
    <div className={className}>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={formattedValue}
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
        render={<CustomInput />}
        onOpen={onCalendarOpen || handleCalenderOpen}
        onClose={onCalendarClose || handleCalenderClose}
        {...props}
      />

      {error?.message && <FieldError error={error?.message as string} />}
    </div>
  );
};
