'use client ';
import { Input } from '@/components/ui/input';
import { Datepicker } from '@/components/ui/datepicker';

type Props = {
  record: {
    statementId: string;
    orderID: string;
    creditCardNumber: string;
    paymentFunctionName: string;
  };
};

export function detail(rowData: Props) {
  return (
    <div className="my-10 flex justify-center">
      <div className=" grid w-[70%] grid-cols-2 gap-5 rounded-2xl border border-gray-100 bg-white dark:bg-gray-100 p-12">

        <div>
          <Input
            label="شماره مرجع"
            labelClassName="font-medium text-gray-900 dark:text-white"
            className="mb-5"
            defaultValue={rowData?.record?.statementId}
            disabled
          />
        </div>
        <div>
          <Input
            label=" شماره پیگیری"
            labelClassName="font-medium text-gray-900 dark:text-white"
            className="mb-5"
            defaultValue={rowData?.record?.orderID}
            disabled
          />
        </div>
        <div>
          <Input
            label="شماره کارت اعتباری"
            labelClassName="font-medium text-gray-900 dark:text-white"
            className="mb-5"
            defaultValue={rowData?.record?.creditCardNumber}
            disabled
          />
        </div>
        <div>
          <Input
            label=" نوع پرداخت"
            labelClassName="font-medium text-gray-900 dark:text-white"
            className="mb-5"
            defaultValue={rowData?.record?.paymentFunctionName}
            disabled
          />
        </div>
        <div>
          <Datepicker label="تاریخ" />
        </div>
      </div>
    </div>
  );
}
