import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import productReducer from "./slices/productSlice";
<<<<<<< HEAD
import detailReducer from "./slices/detailSlice";
=======
>>>>>>> 4d04b733b61952e90cd8d4c425012113e7ea89b3

const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
    },
});

// redux + redux-thunk
// redux toolkit
// redux + saga

export default store;