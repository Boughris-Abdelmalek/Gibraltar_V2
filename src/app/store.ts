import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import { fakeStoreApiSlice } from "./api/fakeStoreApi";
import { firebaseApiSlice } from "./api/firebaseApi";
import productsReducer from "../features/products/ProductsSlice";
import cartReducer from "../features/cart/CartSlice";
import authReducer from "../features/auth/AuthSlice";

import storage from "redux-persist/lib/storage";

const PersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth", "products", "cart"],
};

const rootReducer = combineReducers({
  [firebaseApiSlice.reducerPath]: firebaseApiSlice.reducer,
  [fakeStoreApiSlice.reducerPath]: fakeStoreApiSlice.reducer,
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(PersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
    }).concat(fakeStoreApiSlice.middleware, firebaseApiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
