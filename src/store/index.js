import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import productReducer from "./slices/productSlice"

const store = configureStore({
    reducer: {
        // User reducer : email
        // default로 export된 userReducer를 받아서 바인딩 해줌!
        user : userReducer,

        // Products reducer : products
        product : productReducer
    }
})

export default store;

// 이해를 돕기위한 reducer를 통한 데이터의 보관 형식(걍 그런갑다 정도만)
// {
//     user : {
//         email: "",
//         reducer: {
//             login : () => {},
//         }
//     }
// }