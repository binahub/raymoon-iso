'use client';

import { Datepicker } from '@/components/ui/datepicker';

export default function DateFiled({
  onClear,
  placeholderText = 'Select date',
  inputProps,
  ...props
}: any & { onClear?: () => void }) {
  return (
    <div>
      <Datepicker
        placeholder={placeholderText}
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
