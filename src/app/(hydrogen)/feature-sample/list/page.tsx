'use client';
import  {Table}  from 'shafa-bo';
import { Detail } from '../detail/collaps';
import { Columns } from './columns';
import { generatedFilter, initialFilterValues } from './filter';
import { headerData } from './header';
import ImportButton from '@/app/shared/import-button';
import PrintButton from '@/app/shared/print-button';
import { useCreateSample } from '@/common/apis/test-api/sample.mutation';

export default function FoodPage() {
  /* api call body */
  const parameterMap = {
    parameterMap: {
      page: 0,
      size: 5,
      orderBy: 'id',
      sort: 'asc',
    },
  };

  /* api call */
  const { mutate, isPending:isLoading, data } = useCreateSample();

  /* table setting */
  const handleDataChange = (parametr: any) => {
    mutate({ parameterMap: { ...parameterMap.parameterMap, ...parametr } });
  };

  /* generate any ReactNode for show in layout table */
  const GenerateElement = () => {
    return <div><ImportButton title={'آپلود فایل'} /><PrintButton/></div>;
  };

  /* create title excel columns */
  const exportColumns = 'Order ID,Name';

  return (
    <Table
      pageHeader={headerData}
      /* get columns table */
      columns={Columns}
      /* get data from api call */
      data={data}
      /* handle data table with pagination and filter */
      handleDataChange={handleDataChange}
      isLoading={isLoading}
      /* handle expanded table and show detail or any ReactNode  */
      expandedRow={(rowData: any) => Detail(rowData)}
      /* get any ReactNode */
      buttons={<GenerateElement />}
      /* generate model for form filters */
      filter={{ generatedFilter, initialFilterValues }}
      /* export file */
      exportFile={{ name: 'export-food-table', columns: exportColumns }}
    />
  );
}
