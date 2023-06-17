import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialProducts = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const selectAllProducts = (state: RootState) => state.products.products;

export const { getAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
