'use client ';
import { SubmitHandler } from 'react-hook-form';
import { PiXBold } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { ActionIcon, Title } from 'shafa-bo';
import FormData from '../form.module';

type Props = {
  rowData: {
    id: string;
    name: string;
    description: string;
  };
};

export function Edit(rowData: Props) {
  const { closeModal } = useModal();

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log('data : ', { ...data, id: rowData.rowData.id });
  };

  return (
    <div className='m-auto px-5 pb-10 pt-5 @lg:pt-6 @2xl:px-7 '>
      <div className='mb-1 flex items-center justify-between'>
        <Title as='h4' className='font-semibold '>
          ویرایش جزئیات
        </Title>
        <ActionIcon size='sm' variant='text' onClick={() => closeModal()}>
          <PiXBold className='h-auto w-5' />
        </ActionIcon>
      </div>
      <hr className='my-6 w=[80%] h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50' />
      <FormData handlerOnSubmit={onSubmit} data={rowData?.rowData} numberCol={2} isEdit />
    </div>
  );
}
