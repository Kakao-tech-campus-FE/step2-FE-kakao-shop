import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import expireInTransform from "redux-persist-transform-expire-in";

const expireIn = 24 * 60 * 60 * 1000;

const persistConfig = {
  key: "root",
  storage,
  transforms: [expireInTransform(expireIn)],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export default configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
