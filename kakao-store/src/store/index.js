import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, PERSIST, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";
import detailSlice from "./slices/detailSlice";

import logger from "redux-logger";

const reducers = combineReducers({
  user: userSlice,
  product: productSlice,
  detail: detailSlice,
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

export default store;
