import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export default store;

// redux + redux-thunk
// redux toolkit
// redux + saga
// 대부분 위와 같이 사용함

// redux + redux-thunk + saga 이렇게 쓰는 경우는 존재하지 않음.