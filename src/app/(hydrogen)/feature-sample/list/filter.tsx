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
];
