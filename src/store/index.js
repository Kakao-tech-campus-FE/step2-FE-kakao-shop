import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const store = configureStore({
    reducer: {
        //유저 정보
        //email
        user: userReducer
        //프로덕브 리듀서
        //products: produxtsReducer
    }
});

export default store;