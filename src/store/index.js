import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productsReducer from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});

export default store;
