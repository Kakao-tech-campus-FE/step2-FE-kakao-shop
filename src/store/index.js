import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const store = configureStore({
    reducer: {
        // User reducer: email, token
        user: userReducer
        // Products reducer: products
        // products: productReducer
    }
});

export default store;