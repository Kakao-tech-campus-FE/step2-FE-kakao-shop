import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  userReducer from "./slices/userSlice";

const reducers = {
  user: userReducer,
};
const rootReducer = combineReducers({ ...reducers });



export const store = configureStore({
  reducer: rootReducer,

});
