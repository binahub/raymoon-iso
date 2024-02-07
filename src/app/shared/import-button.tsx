'use client';

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { PiArrowLineDownBold, PiTrashBold } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
import cn from '@/utils/class-names';
import { useEffect, useRef, useState } from 'react';
import { ActionIcon } from 'rizzui';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
  ssr: false,
});
type AcceptedFiles = 'img' | 'pdf' | 'csv' | 'imgAndPdf' | 'all';

type ImportButtonProps = {
  title?: string;
  modalBtnLabel?: string;
  className?: string;
  buttonLabel?: string;
  accept?: AcceptedFiles;
  multiple?: boolean;
  getFile?: (data: any) => void;
};

export default function ImportButton({
  title,
  modalBtnLabel = 'آپلود فایل',
  className,
  buttonLabel = 'آپلود فایل',
  accept,
  multiple,
  getFile,
}: React.PropsWithChildren<ImportButtonProps>) {
  const { openModal } = useModal();
  const [file, setFile] = useState([]);

  function handleImageDelete(index: number) {
    const updatedFiles = file.filter((_, i) => i !== index);
    setFile(updatedFiles);
    // (imageRef.current as HTMLInputElement).value = '';
  }

  return (
    <>
      <Button
        onClick={() =>
          openModal({
            view: (
              <FileUpload
                label={title}
                accept={accept}
                multiple={multiple}
                btnLabel={modalBtnLabel}
                setFileName={(data: any) => {
                  setFile(data);
                  getFile && getFile(data)
                }}
              />
            ),
            customSize: '480px',
          })
        }
        className={cn(
          'w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100 bg-blue-darkBlue',
          className
        )}
      >
        <PiArrowLineDownBold className='me-1.5 h-[17px] w-[17px]' />
        {buttonLabel}
      </Button>
      {file?.length > 0 &&
        file.map((item: File, index: number) => (
          <div className='name-upload' key={index}>
            <p>{item.name}</p>
            <ActionIcon
              onClick={() => handleImageDelete(index)}
              size='sm'
              variant='flat'
              color='danger'
              className='ms-auto flex-shrink-0 p-0 dark:bg-red-dark/20 bg-gray-300'
            >
              <PiTrashBold className='w-6' />
            </ActionIcon>
          </div>
        ))}
    </>
  );
}
