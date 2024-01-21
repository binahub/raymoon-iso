import { Mutex } from 'async-mutex';
import { fetchBaseQuery, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query';
import { getSession } from 'next-auth/react';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchError } from '@/types/error';
import Notification from './notification';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://mobile-panel-service-payment-dev.apps.ocpdev.spsplan.local/api/v1',
  prepareHeaders: async (headers) => {
    // Retrieve the token from session
    const session: any = await getSession();
    // If a token exists, set the Authorization header with the bearer token
    if (session?.apiToken) {
      headers.set('Authorization', `Bearer ${session?.apiToken}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptors: BaseQueryFn<string | FetchArgs> = async (
  args,
  api,
  extraOptions
) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result: QueryReturnValue<unknown, FetchError, FetchBaseQueryMeta> = await baseQuery(
    args,
    api,
    extraOptions
  );
  if (result.error && result.error.status === 401) {
    const error: any = result.error?.data;
    Notification.error(error.message || 'خطا در احراز هویت');
  }
  if (result.error && result.error.status === 400) {
    const error: any = result.error?.data;
    Notification.error(error.message || 'خطا در برقراری ارتباط');
  }
  if (result?.data) {
    const dataInfo: any = result.data;
    if (dataInfo.data.message) {
      Notification.success(dataInfo.data.message);
    }
  }
  return result;
};

export { baseQueryWithInterceptors };
