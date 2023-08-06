import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/ProductSlice"
import detailReducer from "./slices/detailSlice"

const store = configureStore({
    reducer: {
        //유저 정보
        //email
        detail: detailReducer,
        user: userReducer,
        //프로덕브 리듀서
        product: productReducer,
    },
});

//리덕스+리덕스 thunk or toolkit or saga 하나만 사용

export default store;