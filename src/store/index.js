import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/ProductSlice"

const store = configureStore({
    reducer: {
        //유저 정보
        //email
        user: userReducer,
        //프로덕브 리듀서
        products: productReducer,
    }
});

//리덕스+리덕스 thunk or toolkit or saga 하나만 사용

export default store;