import { type DataFilter } from 'shafa-bo';
/* initioalization  */
export const initialFilterValues = {
  name: '',
  // description: '',
};

/* filterable form input */
export const dataFilter: DataFilter = [
  {
    label: 'نام',
    type: 'text',
    key: 'name',
  },
  {
    label: 'توضیحات',
    type: 'text',
    key: 'description',
  },

  {
    label: 'تاریخ شروع',
    type: 'datePicker',
    key: 'date1',
  },
  {
    label: ' وضعیت پرداخت',
    type: 'select',
    key: 'status1',
    selectOption: [
      {
        name: 'موفق',
        value: '1',
      },
      {
        name: 'ناموفق',
        value: '2',
      },
    ],
  },
];
