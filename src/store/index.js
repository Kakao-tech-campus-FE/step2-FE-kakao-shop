import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
// import productReducer from "./slices/productSlice";
// import createSagaMiddleware from "redux-saga";

const store = configureStore({
  reducer: {
    // User reducer: email
    user: userReducer,
    // Products reducer: products
    // product: productReducer,
  },
});

export default store;
