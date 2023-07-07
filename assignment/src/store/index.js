import {configureStore} from "@reduxjs/toolkit";
import  userReducer from "./slices/userSlice";
import  productReducer from "./slices/productSlice";
// import createSagaMiddleware from "redux-saga";
// import getProductSaga from "./sagas/product";
// const sagaMiddleware = createSagaMiddleware();

// function* rootSaga(){
//     // promise 처럼 동작할 수 있다.
//     // all을 하면 강제적으로 이안의 모든 yield는 다 실행-> next 할 필요가 없다.
//     yield all([getProductSaga]);
// }

const store = configureStore({
    // 우리는 이메일 정보를 글로벌로 저장할거임
    // Product 정보
    reducer: {
        // user 다음에 들어가는 어떤 key값으로 구분된 저장소가 되는거임
        user : userReducer,
        // Products reducer: products
        product: productReducer
    },
    // middleware: [sagaMiddleware],
});

// sagaMiddleware.run(rootSaga);


// {
//     user : {
//         email : "" // state
//         reducer : {
//         login : () => {},
//         }
//     }
// }

export default store;