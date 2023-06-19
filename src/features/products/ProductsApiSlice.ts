import { apiSlice } from "../../app/api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ limit }) => ({
        url: "/products",
        params: {
          limit,
        },
      }),
    }),
    getAllProductsCategory: builder.query({
      query: () => ({
        url: "/products/categories",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetAllProductsCategoryQuery } = productsApiSlice;
