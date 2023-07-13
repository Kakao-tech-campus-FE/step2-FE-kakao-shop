import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import detailReducer from "./slices/detailSlice";

const reducers = combineReducers({
  user: userReducer,
  product: productReducer,
  detail: detailReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;