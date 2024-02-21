'use client';
import PageHeader from '@/app/shared/page-header';
import { Card } from 'shafa-bo';
import FormData from '../form.module';
import { headerData } from './header';

export default function FormPage() {

const onSubmit = (data : any)=>{
  console.log(data);  
}

  return (
    <>
      <PageHeader title={headerData.title} breadcrumb={headerData.breadcrumb}/>
      <Card>
        <FormData handlerOnSubmit={onSubmit} numberCol={3} />
      </Card>
    </>
  );
}
