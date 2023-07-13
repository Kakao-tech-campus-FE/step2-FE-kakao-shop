//redux에서 관리하는 데이터가 저장되는 기준 store 파일
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import loginReducer from "./slices/loginSlice";
// import detailReducer from "./slices/detailSlice";

const store = configureStore({ //store : 모든 redux 정보 저장소
    reducer: { //reducer: 상태 변경 함수
        user: userReducer,
        login: loginReducer,  //로그인
        product: productReducer,
    },
});

export default store;
