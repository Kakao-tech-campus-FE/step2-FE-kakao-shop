import { applyMiddleware , configureStore } from "@reduxjs/toolkit";
import userSlice from "../store/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from 'redux'

const reducer = combineReducers({
  user : userSlice.reducer,
});

const persisConfig = {
  key:"root",
  storage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persisConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
  
  devTools: true, // Redux DevTools 활성화
});

export default store;