import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { RootObject, Category } from "./IProps";

const initialProducts = {
  products: [] as RootObject[],
  product: null as RootObject | null,
  productsByCategory: null as { relatedProducts: RootObject[], category: Category } | null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    setAllProducts: (state, { payload }) => {
      state.products = payload;
    },
    setProductById: (state, { payload }) => {
      state.product = payload;
    },
    setProductsByCategory: (state, { payload: { relatedProducts, category } }) => {
      state.productsByCategory = {
        relatedProducts,
        category,
      };
    },
  },
});

export const { setAllProducts, setProductsByCategory, setProductById } = productsSlice.actions;

export default productsSlice.reducer;

// Selector functions
export const selectAllProducts = (state: RootState) => state.products.products;
export const selectProductById = (state: RootState) => state.products.product;
export const selectAllProductsByCategory = (state: RootState) => state.products.productsByCategory;
