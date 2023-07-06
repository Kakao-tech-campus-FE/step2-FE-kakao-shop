import {configureStore} from "@reduxjs/toolkit";
import  userReducer from "./slices/userSlice";

const store = configureStore({
    // 우리는 이메일 정보를 글로벌로 저장할거임
    // Product 정보
    reducer: {
        // user 다음에 들어가는 어떤 key값으로 구분된 저장소가 되는거임
        user : userReducer
        // Products reducer: products
        // products: productsReducer
    }
});

// {
//     user : {
//         email : "" // state
//         reducer : {
//         login : () => {},
//         }
//     }
// }

export default store;