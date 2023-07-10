//redux에서 관리하는 데이터가 저장되는 기준 store 파일
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import loginReducer from "./slices/loginSlice";

const store = configureStore({
    reducer: {
        //reducer: 상태 변경 함수
        // User reducer: email
        user: userReducer,
        login: loginReducer,
        // Products reducer: products
        product: productReducer,
    },
});

export default store;
