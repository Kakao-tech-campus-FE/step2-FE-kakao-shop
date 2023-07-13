import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import isLoggedIn from "./isLoggedIn";

const rootReducer = combineReducers({
  isLoggedIn: isLoggedIn,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;