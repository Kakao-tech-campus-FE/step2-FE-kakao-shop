import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";

//모든 리덕스 파일이 저장되는 기준이 되는 스토어 파일

//툴킷 쓰면 리덕스 파일 간결해짐.

const store = configureStore({
    reducer: {
        //유저 정보 글로벌로 저장
        //로그인 하면 유저 이메일 받게 함.
        user: { useReducer }
        //보통 툴킷은 슬라이스 파일을 이용해 리듀서들 관리
    },
});

// {
//     user:{
//         email
//         reducer:{
//             login:()=>{}
//         }

//     }
// }

export default store;