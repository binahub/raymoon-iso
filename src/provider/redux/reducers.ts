import { CategoryApi } from '@/provider/redux/apis/category';
import { IvaApi } from '@/provider/redux/apis/iva';

const reducers = {
  [IvaApi.reducerPath]: IvaApi.reducer,
  [CategoryApi.reducerPath]: CategoryApi.reducer,
};

export default reducers;
