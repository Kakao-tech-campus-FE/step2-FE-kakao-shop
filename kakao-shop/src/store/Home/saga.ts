import { getProductData } from '@apis/Home';
import {
  FETCH_PRODUCT_DATA,
  FetchProductDataAction,
  setProductErrorState,
  setProductLoadingState,
} from '@store/Home/reducers';
import { AxiosError } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { setProductData, ProductResponse } from './reducers';

export function* fetchProductDataRequest({ payload }: FetchProductDataAction): any {
  try {
    yield put(setProductLoadingState());
    const response = yield call(getProductData, payload);
    yield put(setProductData(response.data));
  } catch (err: unknown) {
    const error = err as AxiosError<ProductResponse>;
    yield put(setProductErrorState(error));
  }
}

export function* homeSaga() {
  yield takeLatest(FETCH_PRODUCT_DATA, fetchProductDataRequest);
}
