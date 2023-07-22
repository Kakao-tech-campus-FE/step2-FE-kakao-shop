import { getProductDetailAPI, addCartItemAPI } from '@apis/Detail';
import {
  ADD_CART_ITEM_REQUEST,
  GET_PRODUCT_DETAIL_REQUEST,
  GetProductDetailRequestAction,
  getProductDetailSuccessAction,
  AddCartItemAction,
  ProductDetailResponse,
  getProductDetailFailureAction,
} from '@store/Detail/reducers';
import { AxiosError, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* watchGetProductDetail({ payload }: GetProductDetailRequestAction) {
  try {
    const response: AxiosResponse<ProductDetailResponse> = yield call(getProductDetailAPI, payload);
    yield put(getProductDetailSuccessAction(response));
  } catch (err: unknown) {
    const error = err as AxiosError<ProductDetailResponse>;
    yield put(getProductDetailFailureAction(error));
  }
}

export function* watchAddCartItem({ payload }: AddCartItemAction) {
  try {
    yield call(addCartItemAPI, payload);
  } catch (err: unknown) {
    // const error = err as AxiosError<>;
  }
}

export function* DetailSaga() {
  yield takeLatest(GET_PRODUCT_DETAIL_REQUEST, watchGetProductDetail);
  yield takeLatest(ADD_CART_ITEM_REQUEST, watchAddCartItem);
}
