import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './slices/userSlice';

const persistStore = {
  key: 'isLoggedIn',
  storage,
};

const persistconfig = persistReducer(persistStore, userReducer);

const store = configureStore({
  reducer: {
    user: persistconfig,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
