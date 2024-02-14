'use client';

import PageHeader, { PageHeaderTypes } from '@/app/shared/page-header';
import ExportButton from '@/app/shared/export-button';

type TableLayoutProps = {
  data: unknown[] | any;
  header: string;
  fileName?: string;
  buttons?: string[];
  hasExportFile?: boolean;
} & PageHeaderTypes;

export default function TableLayout({
  data,
  header,
  fileName,
  children,
  buttons,
  hasExportFile,
  ...props
}: React.PropsWithChildren<TableLayoutProps>) {
  return (
    <>
      <PageHeader {...props}>
        <div className='mt-4 flex items-center gap-3 @lg:mt-0'>
          {buttons}
          {hasExportFile && (
            <ExportButton
              data={data}
              fileName={fileName ? fileName : 'export-table'}
              header={header}
            />
          )}
        </div>
      </PageHeader>

      {children}
    </>
  );
}
