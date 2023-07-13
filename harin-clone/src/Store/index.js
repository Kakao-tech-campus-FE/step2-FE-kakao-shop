import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './Slices/userSlice';
import productReducer from "./Slices/productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  }
})

export default store;