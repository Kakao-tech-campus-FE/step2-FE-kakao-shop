import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type UserDispatch = typeof store.dispatch;
