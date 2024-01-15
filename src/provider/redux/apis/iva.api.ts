import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSession } from 'next-auth/react';

export const IvaApi = createApi({
  reducerPath: 'IvaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    prepareHeaders: async (headers) => {
      // Retrieve the token from session

      const session: any = await getSession();
      // If a token exists, set the Authorization header with the bearer token
      if (session?.apiToken) {
        headers.set('Authorization', `Bearer ${session?.apiToken}`);
      }

      return headers;
    },
  }),
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
        url: '/comments',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  usePostAuthMutation,
  useCommentsListQuery,
} = IvaApi;