'use client';

import { Datepicker } from '@/components/ui/datepicker';

export default function DateFiled({
  onClear,
  placeholder = 'Select date',
  inputProps,
  ...props
}: any & { onClear?: () => void }) {
  return (
    <div>
      <Datepicker
        monthsShown={1}
        placeholder={placeholder}
        selectsRange
        inputProps={{
          inputClassName: 'h-9 [&_input]:text-ellipsis',
          ...inputProps,
        }}
        className="w-72"
        {...props}
      />
    </div>
  );
}
