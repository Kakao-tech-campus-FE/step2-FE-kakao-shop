// redux에서 관리하는 모든 데이터가 저장되는 기준이 되는 store 파일

import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import productReducer from "./slices/productSlice"

//데이터 저장소의 형태를 키값으로부터 알 수 있
const store = configureStore({
  reducer: {
      // User reducer : 유저 정보 저장 - email
      user: userReducer,
      // Products reducer : products
      product: productReducer
  }
})

export default store;