'use client';
import { useState } from 'react';
import {
  Select,
  ActionIcon,
  Button,
  Datepicker,
  Checkbox,
  CheckboxGroup,
  Input,
  FieldError,
  Form,
  Spinner,
  Text,
  Title,
  RizzTable,
  Skeleton,
  TableSkeleton,
  TablePagination,
  QuillLoader,
  SelectLoader,
  Drawer,
  Pagination,
  ControlledTable,
  Password,
  Card,
} from 'shafa-bo';

const page = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Card className='p-5'>
      <Password />
      <Button onClick={() => setOpenDrawer(true)}>drawer</Button>
      <Datepicker label='تاریخ' onChange={(e: any) => console.log(e)} />
      <ActionIcon>salam</ActionIcon>
      <Pagination />
      <Select options={[]} />
      <Checkbox />
      <Checkbox />
      <Input />
      <FieldError error={'ssss'}></FieldError>
      <Spinner />
      <Text>text</Text>
      <Title>title</Title>
      <RizzTable caption={'test rizz table'} />
      <Skeleton />
      <TableSkeleton />
      <Pagination
        total={10}
        current={2}
        defaultCurrent={1}
        pageSize={5}
        pageSizeOptions={[5, 10, 15, 20]}
      />
      <ControlledTable
        isLoading={true}
        data={[]}
        // @ts-ignore
        scroll={{ x: 1300 }}
        variant='modern'
        rowKey={(record) => record.id}
        className='text-sm'
        paginatorOptions={{
          pageSize: 5,
          total: 50,
          current: 1,
          onChange: (page: number) => console.log(page),
        }}
      />
      <TablePagination total={25} current={1} defaultCurrent={1} pageSize={6} />
      <QuillLoader className='col-span-full h-[143px]' />
      <SelectLoader />
      <Drawer
        size='sm'
        isOpen={openDrawer ?? false}
        onClose={() => setOpenDrawer(false)}
        overlayClassName='dark:bg-opacity-60'
        containerClassName='dark:bg-gray-100 max-w-md'
      >
        <p>inja dakhele drawer</p>
      </Drawer>
    </Card>
  );
};

export default page;
