import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialCartProducts = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartProducts,
  reducers: {
    setCartProducts: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
  },
});

export const { setCartProducts, addToCart } = cartSlice.actions;

export default cartSlice.reducer;

// Selector functions
export const selectCartProducts = (state: RootState) => state.cart.cart;