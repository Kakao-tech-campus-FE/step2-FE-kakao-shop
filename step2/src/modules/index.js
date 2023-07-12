import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import isLoggedIn from "./isLoggedIn";
import productReducer from "./product";

const rootReducer = combineReducers({
  isLoggedIn: isLoggedIn,
  product: productReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;