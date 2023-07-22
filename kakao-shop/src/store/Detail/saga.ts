import { getProductDetail, addCartItem } from '@apis/Detail';
import {
  ADD_CART_ITEM,
  FETCH_PRODUCT_DETAIL,
  FetchProductDetailAction,
  setProductDetail,
  setLoadingState,
  AddCartItemAction,
  ProductDetailResponse,
  productDetailfailure,
} from '@store/Detail/reducers';
import { AxiosError, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

const LOADING = true;
export function* fetchProductDetailRequest({ payload }: FetchProductDetailAction) {
  try {
    yield put(setLoadingState(LOADING));
    const response: AxiosResponse<ProductDetailResponse> = yield call(getProductDetail, payload);
    yield put(setProductDetail(response));
  } catch (err: unknown) {
    const error = err as AxiosError<ProductDetailResponse>;
    yield put(productDetailfailure(error));
  }
}

export function* AddCartItemRequest({ payload }: AddCartItemAction) {
  try {
    yield call(addCartItem, payload);
  } catch (err: unknown) {
    // const error = err as AxiosError<>;
  }
}

export function* DetailSaga() {
  yield takeLatest(FETCH_PRODUCT_DETAIL, fetchProductDetailRequest);
  yield takeLatest(ADD_CART_ITEM, AddCartItemRequest);
}
