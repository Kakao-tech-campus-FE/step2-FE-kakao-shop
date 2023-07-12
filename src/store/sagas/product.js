import { takeLatest, call, put, all, fork } from "redux-saga/effects";
import { fetchProducts } from "../../services/api";
import {
  getProducts,
  getProductSuccess,
  getProductsFailed,
} from "../slices/productSlice";

function* getProductBySaga() {
  try {
    const res = yield call(fetchProducts);
    yield put(getProductSuccess(res.data));
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
