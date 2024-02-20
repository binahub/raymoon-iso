'use client';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import Card from '@/components/cards/card';
import FormData from '../form.module';
import { pageHeader } from './header';

export default function FormPage() {

const onSubmit = (data : any)=>{
  console.log(data);  
}

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}/>
      <Card>
        <FormData handlerOnSubmit={onSubmit} />
      </Card>
    </>
  );
}
