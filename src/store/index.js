import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    // user reducer: email
    user: userReducer,
    // products reducer: products
    // products: productsReducer,
  },
});

export default store;
