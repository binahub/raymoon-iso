'use client';

import Link from 'next/link';
import { routes } from '@/config/routes';
import { Button } from '@/components/ui/button';
import PageHeader from '@/app/shared/page-header';
import InvoiceTable from '@/app/shared/invoice/invoice-list/table';
import { PiPlusBold } from 'react-icons/pi';
import { invoiceData } from '@/data/invoice-data';
import ExportButton from '@/app/shared/export-button';
import { parameterMap } from '@/const/apiCalls';


import { metaObject } from '@/config/site.config';
import { useCategoryListMutation } from '@/provider/redux/apis/category.api';
import { useEffect } from 'react';

export const metadata = {
  ...metaObject('Invoices'),
};

const pageHeader = {
  title: 'Invoice List',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      href: routes.invoice.home,
      name: 'Invoice',
    },
    {
      name: 'List',
    },
  ],
};


export default function Invoice() {
    const [list, { isLoading : dataIsLoading, isSuccess, isError, error, data: catData }] = useCategoryListMutation();

    useEffect(() => {
        list(parameterMap)
    },[list])

    if(dataIsLoading){
        return <div>loading...</div>
    }
    return (
        <>
         <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={catData?.foodCategoryObjectList}
            fileName="invoice_data"
            header="ID,Name,Username,Avatar,Email,Due Date,Amount,Status,Created At"
          />
          <Link href={routes.invoice.create} className="w-full @lg:w-auto">
            <Button
              tag="span"
              className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
            >
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add Invoice
            </Button>
          </Link>
        </div>
      </PageHeader>

      <InvoiceTable data={catData?.foodCategoryObjectList} />
        </>
    )
}