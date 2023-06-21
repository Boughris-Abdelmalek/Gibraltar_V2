import { fakeStoreApiSlice } from "../../app/api/fakeStoreApi";
import { RootObject, Category } from "./IProps";

export const productsApiSlice = fakeStoreApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<RootObject[], { limit: number }>({
      query: ({ limit }) => ({
        url: "/products",
        params: {
          limit,
        },
      }),
      transformResponse: (response: RootObject[]) => {
        const productsWithQuantity = response.map((product) => ({
          ...product,
          quantity: 1, // Set the initial quantity to 0 or any default value
        }));

        return productsWithQuantity;
      },
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
