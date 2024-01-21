import { CategoryApi } from './apis/category';
import { IvaApi } from './apis/iva';

const middlewares: any = [IvaApi.middleware, CategoryApi.middleware];

export default middlewares;
