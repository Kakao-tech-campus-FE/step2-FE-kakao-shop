import { configureStore } from '@reduxjs/toolkit';
import  useReducer  from './Slices/userSlice';

const store = configureStore({
  reducer: {
    user: useReducer
  }
})

export default store;