import { getProductData } from '@apis/Home';
import { FETCH_PRODUCT_DATA, setProductLoadingState } from '@store/Home/reducers';
import { call, put, takeLatest } from 'redux-saga/effects';

import { setProductData } from './reducers';

export function* fetchProductDataRequest(): any {
  try {
    yield put(setProductLoadingState());
    const response = yield call(getProductData);
    yield put(setProductData(response.data));
  } catch (error: any) {}
}

export function* homeSaga() {
  yield takeLatest(FETCH_PRODUCT_DATA, fetchProductDataRequest);
}
