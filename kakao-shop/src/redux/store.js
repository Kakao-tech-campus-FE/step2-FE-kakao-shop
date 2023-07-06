import { combineReducers, configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer, PERSIST, PURGE } from "redux-persist";
import userSlice from "./user/userSlice";
import logger from "redux-logger";

const reducers = combineReducers({
  user: userSlice,
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
    //미들웨어 작성시 에러 주의
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE],
      },
    }).concat(logger),
});

export default store;
