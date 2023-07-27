//redux에서 관리하는 데이터가 저장되는 기준 store 파일
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({ //store : 모든 redux 정보 저장소
    reducer: { //reducer: 상태 변경 함수
        user: userReducer,
        product: productReducer,
    },
});

export default store;
