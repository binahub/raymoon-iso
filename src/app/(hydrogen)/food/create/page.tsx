'use client';
import PageHeader from '@/app/shared/page-header';
// import Card from '@/components/cards/card';
import { Card } from 'shafa-bo';
import FormData from '../form.module';
import { headerData } from './header';
import NoSsr from '@/components/no-ssr';

export default function FormPage() {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <PageHeader title={headerData.title} breadcrumb={headerData.breadcrumb} />
      <NoSsr>
        <Card>
          <FormData handlerOnSubmit={onSubmit} />
        </Card>
      </NoSsr>
    </>
  );
}
