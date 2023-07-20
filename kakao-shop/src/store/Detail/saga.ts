import { getProductDetail } from '@apis/Detail';
import { FETCH_PRODUCT_DETAIL, FetchProductDetailAction, setProductDetail } from '@store/Detail/reducers';
import { AxiosError } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* fetchProductDetailRequest({ payload }: FetchProductDetailAction): any {
  try {
    const response = yield call(getProductDetail, payload);
    yield put(setProductDetail(response));
  } catch (err: unknown) {
    // const error = err as AxiosError<>;
  }
}

export function* DetailSaga() {
  yield takeLatest(FETCH_PRODUCT_DETAIL, fetchProductDetailRequest);
}
