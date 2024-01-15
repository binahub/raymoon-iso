import { CategoryApi } from './apis/category.api';
import { IvaApi } from './apis/iva.api';

const middlewares: any = [IvaApi.middleware, CategoryApi.middleware];

export default middlewares;
