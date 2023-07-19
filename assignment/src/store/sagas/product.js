// import { takeLatest, call, put, all, fork} from "redux-saga/effects";

// import { fetchProducts } from "../../services/api";
// import { getProducts,getProductsSuccess, getProductsFailed} from '../slices/productSlice'

// function* getProductBySaga() {
//     try{
//         // call : axios get promise
//         const res = yield call(fetchProducts); // 비동기 요청, 가장 최근것만 취한다.
//         yield put(getProductsSuccess(res.data));
//     }catch(e){
//         yield put(getProductsFail(err));

//     }
// }

// function* watchGetProducts(){
//     // 제일 빨리오는 것만 비동기처리
//     // ddos를 막을 수 있다.
//     yield takeLatest(getProducts, getProductBySaga);
// }

// export default function* getProductSaga(){
//     yield all([fork(watchGetProducts)]);
// }
