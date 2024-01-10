'use client';

import { Datepicker } from "@/components/ui/datepicker"; 

function Shakiba() {
  return (
    <div className="d-flex rtl w-[15rem] flex-col items-center justify-center">
      <Datepicker label="تقویم شکیبا" placeholder='انتخاب کنید...' />
    </div>
  );
}

export default Shakiba;
