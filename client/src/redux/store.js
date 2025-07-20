import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { bagsApi } from "./services/bagApi";
import ordersApi from "./services/orderApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [bagsApi.reducerPath]: bagsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bagsApi.middleware, ordersApi.middleware),
});
