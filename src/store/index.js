import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import productReducer from './slices/productSlice';

const store = configureStore({
  reducer: {
    // user reducer: email
    user: userReducer,
    // products reducer: products
    products: productReducer,
  },
});

export default store;
