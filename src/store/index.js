import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
//make redux store, parameter reducer object : userReducer
const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export default store;

//미들웨어는 거의 하나만 사용한다.
//redux + redux-thunk
//redux toolkit
//redux + saga
