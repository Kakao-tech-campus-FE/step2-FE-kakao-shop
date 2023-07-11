import {configureStore} from "@reduxjs/toolkit";
import  userReducer from "./slices/userSlice";
import productsReducer from "./slices/productSlice";

const store = configureStore({
    // 우리는 이메일 정보를 글로벌로 저장할거임
    reducer: {
        // user 다음에 들어가는 어떤 key값으로 구분된 저장소가 되는거임
        user : userReducer,
        products : productsReducer,
    },

});


export default store;