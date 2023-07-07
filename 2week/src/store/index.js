// 모든 redux에서 관리하는 데이터가 저장되는 store 파일
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"

const store = configureStore({
  reducer: {
    // User reducer: email
    user: userReducer
    // Prouducts reducer: porducts
  }
})

export default store