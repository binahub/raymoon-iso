import { type GeneratedFilterType } from "@/app/shared/table/content-filter";
/* initioalization  */
export const initialFilterValues : any = {
  name: '',
  // description: '',
};

/* filterable form input */
export const generatedFilter: GeneratedFilterType = [
  {
    label: 'نام',
    type: 'text',
    key: 'name',
  },
  // {
  //   label: 'توضیحات',
  //   type: 'text',
  //   key: 'description',
  // },
  // {
  //   label: ' وضعیت پرداخت',
  //   type: 'select',
  //   key: 'status1',
  //   selectOption: [
  //     {
  //       name: 'موفق',
  //       value: '1',
  //     },
  //     {
  //       name: 'ناموفق',
  //       value: '2',
  //     },
  //   ],
  // },
];
