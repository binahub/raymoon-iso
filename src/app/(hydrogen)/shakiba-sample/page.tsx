'use client';

import { Datepicker } from '@/components/ui/datepicker';

function Shakiba() {
  return (
    <div className="d-flex rtl w-[15rem] flex-col items-center justify-center">
      <Datepicker
        label="تقویم شکیبا"
        placeholder="انتخاب کنید..."
        minDate={new Date()}
        maxDate="1402-10-29"
        value="1402-10-30"
        // disabled
      />
    </div>
  );
}

export default Shakiba;