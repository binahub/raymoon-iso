'use client';

import PageHeader, { PageHeaderTypes } from '@/app/shared/page-header';
import ImportButton from '@/app/shared/import-button';
import {ExportButton} from 'shafa-bo';

type TableLayoutProps = {
  data: unknown[] | any;
  header: string;
  fileName: string;
  buttons: string[];
} & PageHeaderTypes;

export default function TableLayout({
  data,
  header,
  fileName,
  children,
  buttons,
  ...props
}: React.PropsWithChildren<TableLayoutProps>) {
  const buttonsFactory: any = {
    export: <ExportButton data={data} fileName={fileName} header={header} />,
    import: <ImportButton title={'Import File'} />,
    create: <button>ایجاد</button>,
  };
  return (
    <>
      <PageHeader {...props}>
        <div className='mt-4 flex items-center gap-3 @lg:mt-0'>
          {Object.keys(buttonsFactory).map(
            (item) => buttons.includes(item) && buttonsFactory[item]
          )}
        </div>
      </PageHeader>

      {children}
    </>
  );
}
