import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import detailReducer from "./slices/detailSlice";
const store = configureStore({
  reducer: {
    //user reducer
    user: userReducer,
    product: productReducer,
    detail: detailReducer,
  },
});

export default store;
