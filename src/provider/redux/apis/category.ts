import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";

export const CategoryApi = createApi({
  reducerPath: "CategoryApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://78.157.51.13/food/api/v1",
    baseUrl: "http://localhost:3000",
    // prepareHeaders: async (headers) => {
    //   // Retrieve the token from session

    //   const session : any = await getSession()
    //   // If a token exists, set the Authorization header with the bearer token
    //   if (session?.apiToken) {
    //     headers.set("Authorization", `Bearer ${session?.apiToken}`);
    //   }

    //   return headers;
    // },
  }),
  tagTypes: ["auth", "category", "food", "organization"],
  endpoints: (builder) => ({
    postAuth: builder.mutation({
      query: (params: any) => ({
        url: "/unit/login/authenticate",
        method: "POST",
        body: params,
      }),
      invalidatesTags: ["auth"],
    }),
    categoryList: builder.mutation({
      query: (params: any) => ({
        // url: "/categoryFood/list",
        url: "/food",
        method: "POST",
        body: params,
      }),
      invalidatesTags: ["category"],
    }),
    getFoods: builder.query({
      query: () => "/foods",
      providesTags: ["food"],
    }),
    addCategoryFood: builder.mutation({
      query: (todo: any) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["food"],
    }),
    updateCategoryFood: builder.mutation({
      query: (todo: any) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["food"],
    }),
    deleteCategoryFood: builder.mutation({
      query: ({ id }: any) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["food"],
    }),
    organizationList: builder.mutation({
      query: (params: any) => ({
        url: "/organization/list",
        method: "POST",
        body: params,
        mode: "no-cors",
      }),
      invalidatesTags: ["organization"],
    }),
  }),
});

export const {
  usePostAuthMutation,
  useCategoryListMutation,
  useLazyGetFoodsQuery,
  useGetFoodsQuery,
  useAddCategoryFoodMutation,
  useUpdateCategoryFoodMutation,
  useDeleteCategoryFoodMutation,
  useOrganizationListMutation,
} = CategoryApi;