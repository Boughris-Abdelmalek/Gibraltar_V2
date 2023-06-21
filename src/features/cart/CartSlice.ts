import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialCartProducts = {
  cart: {
    products: [],
    total: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartProducts,
  reducers: {
    setCartProducts: (state, action) => {
      state.cart.products = action.payload;
      state.cart.total = calculateTotal(state.cart.products);
    },
    addToCart: (state, { payload }) => {
      const existingProduct = state.cart.products.find((product) => product.id === payload.id);
      if (existingProduct) {
        existingProduct.quantity += payload.quantity;
      } else {
        state.cart.products.push({ ...payload, quantity: payload.quantity });
      }
      state.cart.total = calculateTotal(state.cart.products);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.cart.products.find((product) => product.id === productId);
      if (product) {
        product.quantity = quantity;
      }
      state.cart.total = calculateTotal(state.cart.products);
    },
    removeFromCart: (state, { payload }) => {
      state.cart.products = state.cart.products.filter((product) => product.id !== payload);
      state.cart.total = calculateTotal(state.cart.products);
    },
  },
});

// Helper function to calculate the total based on products and quantities
const calculateTotal = (products) => {
  return products.reduce((total, product) => total + product.price * product.quantity, 0);
};

export const { setCartProducts, addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

// Selector functions
export const selectCartProducts = (state: RootState) => state.cart.cart;
