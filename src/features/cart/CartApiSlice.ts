import { fakeStoreApiSlice } from "../../app/api/fakeStoreApi";

export const cartApiSlice = fakeStoreApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCartProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
    }),
  }),
});

export const { useGetAllCartProductsQuery } = cartApiSlice;
