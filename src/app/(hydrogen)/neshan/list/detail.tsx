'use client ';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type Props = {
  record: {
    statementId: string;
    orderID: string;
  };
};


export function detail(rowData: Props) {

  return (
    <div className="flex justify-center">
      <Form
        onSubmit={() => {}}
        className="mt-7 grid w-[50%] gap-4 py-10 md:grid-cols-1 md:gap-7  "
      >
        {({
          formState: { errors },
        }) => {
          return (
            <div>
              <Input
                label="شماره مرجع"
                labelClassName="font-medium text-gray-900 dark:text-white"
                className="mb-5"
                defaultValue={rowData?.record?.statementId}
                disabled
              />
              <Input
                label=" شماره پیگیری"
                labelClassName="font-medium text-gray-900 dark:text-white"
                className="mb-5"
                defaultValue={rowData?.record?.orderID}
                disabled
              />
            </div>
          );
        }}
      </Form>
    </div>
  );
}
