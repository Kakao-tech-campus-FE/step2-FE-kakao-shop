import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, PERSIST, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userSlice from "./user/userSlice";
import productSlice from "./product/productSlice";

import logger from "redux-logger";

const reducers = combineReducers({
  user: userSlice,
  product: productSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
  whitelist: ["user"],
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

// redux + redux-thunk
// redux toolkit
// redux + saga

export default store;
