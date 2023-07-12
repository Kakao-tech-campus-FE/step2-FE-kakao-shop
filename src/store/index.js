import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productSlice";
import detailReducer from "./slices/detailSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productsReducer,
    detail: detailReducer,
  },
});

export default store;
