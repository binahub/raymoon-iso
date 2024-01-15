'use client '
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type Props ={
  record :{
    name: string,
    description: string
  }
}
export function detail(rowData : Props) {

  console.log('rowData',rowData);
  
        return <div className='flex justify-center'>
           <Form
              onSubmit={()=>{}}
              // resetValues={reset}
              // validationSchema={customerProfileSchema}
              // useFormProps={{
              //   defaultValues: initialValues,
              // }}
              className="mt-7 grid gap-4 md:grid-cols-1 md:gap-7 py-10 w-[50%]  "
            >
              {({
                register,
                control,
                setValue,
                getValues,
                formState: { errors },
              }) => {
                // console.log('errors', errors);
                return (
                  <div>
                    <Input
                      label="نام"
                      labelClassName="font-medium text-gray-900 dark:text-white"
                      defaultValue={rowData?.record?.name}
                      readOnly
                    />
                    <Input
                      label=" توضیحات"
                      labelClassName="font-medium text-gray-900 dark:text-white"
                      defaultValue={rowData?.record?.description}
                      readOnly
                    />
                  </div>
                );
              }}
            </Form>
        </div>;
      }
    