import { getProductsAPI } from '@apis/Home';
import type { GetProductsResponse } from '@apis/Home';
import { GET_PRODUCTS_REQUEST, GetProductsRequestAction, getProductsFailureAction } from '@store/Home/reducers';
import { AxiosError } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { getProductsSuccessAction } from './reducers';

export function* watchGetProducts({ payload }: GetProductsRequestAction): any {
  try {
    const response = yield call(getProductsAPI, payload);
    yield put(getProductsSuccessAction(response.data));
  } catch (err: unknown) {
    const error = err as AxiosError<GetProductsResponse>;
    yield put(getProductsFailureAction(error));
  }
}

export function* homeSaga() {
  yield takeLatest(GET_PRODUCTS_REQUEST, watchGetProducts);
}
