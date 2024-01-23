'use client ';
import { Input } from '@/components/ui/input';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { ActionIcon, Button, Title } from 'rizzui';
import { PiXBold } from 'react-icons/pi';
import { classNames } from 'uploadthing/client';

export function ModalView() {
  const { closeModal } = useModal();
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

      <div className='flex justify-center'>
        <div className=' grid w-[100%] grid-cols-2 gap-5 bg-white dark:bg-gray-100 pb-8'>
          <div>
            <Input
              label='شماره مرجع'
              labelClassName='font-mediu dark:text-white'
            />
          </div>
          <div>
            <Input
              label=' شماره پیگیری'
              labelClassName='font-mediu dark:text-white'
            />
          </div>
          <div>
            <Input
              label='شماره کارت اعتباری'
              labelClassName='font-mediu dark:text-white'
            />
          </div>
          <div>
            <Input
              label=' نوع پرداخت'
              labelClassName='font-mediu dark:text-white'
            />
          </div>
          <div className='col-span-full mt-2 flex items-center justify-end'>
            <Button
              type='submit'
              className='dark:text-white dark:active:bg-gray-100 bg-blue-darkBlue w-32'
              // isLoading={isLoading}
            >
              ویرایش
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
