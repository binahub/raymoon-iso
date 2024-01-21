import { baseQueryWithInterceptors } from '@/provider/redux/base-query';
import { createApi } from '@reduxjs/toolkit/query/react';

export const IvaApi = createApi({
  reducerPath: 'IvaApi',
  baseQuery: baseQueryWithInterceptors,
  endpoints: (builder) => ({
    postAuth: builder.mutation({
      query: (params: any) => ({
        url: '/unit/login/authenticate',
        method: 'POST',
        body: params,
      }),
    }),
    commentsList: builder.query({
      query: () => ({
        url: '/Profile',
        method: 'GET',
      }),
    }),
  }),
});

export const { usePostAuthMutation, useCommentsListQuery } = IvaApi;
