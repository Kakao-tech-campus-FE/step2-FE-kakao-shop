import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    // 유저정보 글로벌로 저장 User reducer : email
    user: userReducer,
    // Products reducer: produts
    // products: useReducer
  },
});

export default store;
