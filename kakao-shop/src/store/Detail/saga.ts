import { getProductDetailAPI, addCartItemAPI } from '@apis/Detail';
import type { GetProductDetailResponse } from '@apis/Detail';
import { getCartsRequestAction } from '@store/Cart/reducers';
import {
  ADD_CART_ITEM_REQUEST,
  GET_PRODUCT_DETAIL_REQUEST,
  GetProductDetailRequestAction,
  getProductDetailSuccessAction,
  AddCartItemAction,
  getProductDetailFailureAction,
} from '@store/Detail/reducers';
import { AxiosError, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* watchGetProductDetail({ payload }: GetProductDetailRequestAction) {
  try {
    const response: AxiosResponse<GetProductDetailResponse> = yield call(getProductDetailAPI, payload);
    yield put(getProductDetailSuccessAction(response));
  } catch (err: unknown) {
    const error = err as AxiosError<GetProductDetailResponse>;
    yield put(getProductDetailFailureAction(error));
  }
}

export function* watchAddCartItem({ payload }: AddCartItemAction) {
  try {
    yield call(addCartItemAPI, payload);
    yield put(getCartsRequestAction());
  } catch (err: unknown) {
    // const error = err as AxiosError<>;
  }
}

export function* DetailSaga() {
  yield takeLatest(GET_PRODUCT_DETAIL_REQUEST, watchGetProductDetail);
  yield takeLatest(ADD_CART_ITEM_REQUEST, watchAddCartItem);
}
