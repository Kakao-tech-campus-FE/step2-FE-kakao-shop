import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import searchResultReducer from "./slices/searchResultSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    searchResult: searchResultReducer,
  },
});

export default store;
