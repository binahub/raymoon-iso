'use client';
import { useCategoryListMutation } from '@/provider/redux/apis/category';
import Table from '@/app/shared/table/table';
import { detail } from '../detail/collaps';
import { Columns } from './columns';
import { generatedFilter, initialFilterValues } from './filter';
import { headerData } from './header';
import ImportButton from '@/app/shared/import-button';

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
  const [list, { isLoading, data }] = useCategoryListMutation();

  /* table setting */
  const handleDataChange = (parametr: any) => {
    list({ parameterMap: { ...parameterMap.parameterMap, ...parametr } });
  };

  /* generate any ReactNode for show in layout table */
  const GenerateElement = () => {
    return <ImportButton title={'آپلود فایل'} />;
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
      expandedRow={(rowData: any) => detail(rowData)}
      /* get any ReactNode */
      buttons={<GenerateElement />}
      /* generate model for form filters */
      filter={{ generatedFilter, initialFilterValues }}
      /* export file */
      exportFile={{ name: 'export-food-table', columns: exportColumns }}
    />
  );
}
