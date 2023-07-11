// redux store
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // slice를 만들어 각 reducer를 관리
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    // User reducer - 유저정보(email)
    user: userReducer,
    // Products reducer: products
    product: productReducer
  }
});

export default store;