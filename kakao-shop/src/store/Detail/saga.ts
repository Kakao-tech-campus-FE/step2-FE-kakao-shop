import { getProductDetail, addCartItem } from '@apis/Detail';
import {
  ADD_CART_ITEM,
  FETCH_PRODUCT_DETAIL,
  FetchProductDetailAction,
  setProductDetail,
  setLoadingState,
  AddCartItemAction,
} from '@store/Detail/reducers';
import { AxiosError, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* fetchProductDetailRequest({ payload }: FetchProductDetailAction): any {
  try {
    yield put(setLoadingState());
    const response = yield call(getProductDetail, payload);
    yield put(setProductDetail(response));
  } catch (err: unknown) {
    // const error = err as AxiosError<>;
  }
}

export function* AddCartItemRequest({ payload }: AddCartItemAction) {
  try {
    yield put(setLoadingState());
    const response: AxiosResponse = yield call(addCartItem, payload);
  } catch (err: unknown) {
    // const error = err as AxiosError<>;
  }
}

export function* DetailSaga() {
  yield takeLatest(FETCH_PRODUCT_DETAIL, fetchProductDetailRequest);
  yield takeLatest(ADD_CART_ITEM, AddCartItemRequest);
}
