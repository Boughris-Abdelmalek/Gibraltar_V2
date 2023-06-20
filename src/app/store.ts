import { configureStore } from "@reduxjs/toolkit";
import { fakeStoreApiSlice } from "./api/fakeStoreApi";
import { firebaseApiSlice } from "./api/firebaseApi";
import productsReducer from "../features/products/ProductsSlice";
import authReducer from "../features/auth/AuthSlice";

export const store = configureStore({
  reducer: {
    [fakeStoreApiSlice.reducerPath]: fakeStoreApiSlice.reducer,
    [firebaseApiSlice.reducerPath]: firebaseApiSlice.reducer,
    auth: authReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
  // check it later: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
    getDefaultMiddleware({ serializableCheck: false }).concat(
      fakeStoreApiSlice.middleware,
      firebaseApiSlice.middleware,
    ),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
