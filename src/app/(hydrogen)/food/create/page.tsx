'use client';
import PageHeader from '@/app/shared/page-header';
// import Card from '@/components/cards/card';
// import { Card } from 'shafa-bo';
import FormData from '../form.module';
import { headerData } from './header';
import dynamic from 'next/dynamic';
// import NoSsr from '@/components/no-ssr';
const Card = dynamic(() => import('shafa-bo').then((module) => module.Card), { ssr: false });

export default function FormPage() {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <PageHeader title={headerData.title} breadcrumb={headerData.breadcrumb} />
      <Card>
        <FormData handlerOnSubmit={onSubmit} />
      </Card>
    </>
  );
}
