'use client';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import Card from '@/components/cards/card';
import FormData from '../form.module';

const pageHeader = {
  title: 'نشان بانک',
  breadcrumb: [
    {
      href: routes.food.create,
      name: ' نشان اعتباری ',
    },
    {
      name: 'افزودن پرداخت نشان اعتباری',
    },
  ],
};

export default function FormPage() {

const onSubmit = (data : any)=>{
  console.log(data);  
}

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}></PageHeader>
      <Card>
        <FormData handlerOnSubmit={onSubmit} />
      </Card>
    </>
  );
}
