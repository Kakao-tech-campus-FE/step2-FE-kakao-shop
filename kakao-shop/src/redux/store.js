import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, PERSIST, PURGE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productSlice from './product/productSlice';

import logger from 'redux-logger';

const reducers = combineReducers({
  product: productSlice,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE],
      },
    }).concat(logger),
});

export default store;
