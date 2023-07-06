// redux store
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // slice를 만들어 각 reducer를 관리

const store = configureStore({
  reducer: {
    // User reducer - 유저정보(email)
    user: userReducer
    // Products reducer: products
    //products: productsReducer
  }
});
export default store;