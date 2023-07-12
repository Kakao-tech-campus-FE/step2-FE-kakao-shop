import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import productReducer from "./slices/productSlice"

const store = configureStore({
	reducer: {
		// User reducer: email
		user: userReducer,
		// Products reducer: products
		product: productReducer
	},
});

export default store;