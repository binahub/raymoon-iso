import { CategoryApi } from './apis/category.api';
import { IvaApi } from './apis/iva.api';

const reducers = {
  [IvaApi.reducerPath]: IvaApi.reducer,
  [CategoryApi.reducerPath]: CategoryApi.reducer,
};

export default reducers;
