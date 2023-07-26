import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import userSlice from "../store/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import productsSlice from "../store/productSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  products: productsSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true, // Redux DevTools 활성화
  // middleware
});

export const persistor = persistStore(store);
