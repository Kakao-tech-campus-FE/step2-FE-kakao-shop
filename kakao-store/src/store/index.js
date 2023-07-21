import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import productReducer from "./slices/productSlice"
import detailReducer from "./slices/detailSlice"

const store = configureStore({
	reducer: {
		// User reducer: email
		user: userReducer,
		// Products reducer: products
		product: productReducer,
		// Detail reducer: 
		detail: detailReducer,
	},
});

export default store;