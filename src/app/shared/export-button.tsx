'use client';

import { PiArrowLineDownBold } from 'react-icons/pi';
import { cn, Button } from 'shafa-bo';
import { exportToCSV } from '@/utils/export-to-csv';

type ExportButtonProps = {
  data: unknown[];
  header: string;
  fileName: string;
  className?: string;
};

export default function ExportButton({ data, header, fileName, className }: ExportButtonProps) {
  return (
    <Button
      variant='outline'
      onClick={() => exportToCSV(data, header, fileName)}
      className={cn('w-full @lg:w-auto', className)}
      // color='danger'
    >
      <PiArrowLineDownBold className='me-1.5 h-[17px] w-[17px]' />
      خروجی
    </Button>
  );
}
