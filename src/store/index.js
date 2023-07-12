import { configureStore } from '@reduxjs/toolkit';
import useReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    // User reducer: email
    user: useReducer,
    // Products reducer: products
    // products: productsReducer
  },
});

export default store;
