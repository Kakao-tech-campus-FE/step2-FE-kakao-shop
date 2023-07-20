import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import expireReducer from 'redux-persist-expire';
import storage from 'redux-persist/lib/storage';
import userReducer from './slices/userSlice';
import productReducer from './slices/productSlice';

const persistConfig = {
  key: 'user',
  storage,
  transforms: [
    expireReducer('user', {
      expireSeconds: 3000,
      expiredState: { isLoggedIn: false, email: null },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
    product: productReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
