import {type DataFilter} from '@/app/shared/table/content-filter';
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
];
