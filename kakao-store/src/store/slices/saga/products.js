import { takeLatest, call, put, all, fork } from "redux-saga/effects";
import { 
    getProducts,
    getProductsSuccess,
    getProductsFailed,
} from "../productSlice.js";
import { fetchProducts } from "../../../apis/api.js";

function* getProductBySaga() {
    try {
        const res = yield call(fetchProducts);
        yield put(getProductsSuccess(res.data));
    } catch (err) {
        yield put(getProductsFailed(err));
    }
}

function* watchGetProducts() {
    yield takeLatest(getProducts, getProductBySaga);
}

export default function* getProductSaga() {
    yield all([fork(watchGetProducts)]);
}