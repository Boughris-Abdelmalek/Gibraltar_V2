import { apiSlice } from "../../app/api/apiSlice";
import { RootObject, Category } from "./IProps";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<RootObject[], { limit: number }>({
      query: ({ limit }) => ({
        url: "/products",
        params: {
          limit,
        },
      }),
    }),
    getProductById: builder.query<RootObject, number>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    getAllProductsCategory: builder.query({
      query: () => ({
        url: "/products/categories",
      }),
    }),
    getProductsByCategory: builder.query({
      query: (category) => ({
        url: `/products/category/${category}`,
      }),
      transformResponse: (response: RootObject[], meta, arg: Category) => {
        return {
          relatedProducts: response,
          category: arg,
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetAllProductsCategoryQuery,
  useGetProductsByCategoryQuery,
} = productsApiSlice;
