import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './Slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export default store;