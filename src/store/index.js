import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const store = configureStore({
    reducer: {
        // User reducer : email
        // default로 export된 userReducer를 받아서 바인딩 해줌!
        user : userReducer,
    }
})

export default store;