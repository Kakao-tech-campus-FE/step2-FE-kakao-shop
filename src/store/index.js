// redux store
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // slice를 만들어 각 reducer를 관리
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    // User reducer - 유저정보(email)
    user: userReducer,
    // Products reducer: products
    product: productReducer,
    // 상품 세부 정보 페이지의 상태는 react-query로 관리하여 
    // 더이상 redux를 통해 관리할 필요가 없어졌다.
    // detail: detailReducer,
  }
});

export default store;