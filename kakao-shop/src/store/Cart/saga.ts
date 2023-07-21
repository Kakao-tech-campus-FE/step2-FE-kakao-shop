import { getCarts } from '@apis/Cart';
import { FETCH_CARTS, setCarts, setLoadingState } from '@store/Cart/reducers';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* fetchCartsRequest(): any {
  try {
    yield put(setLoadingState());
    const response = yield call(getCarts);
    yield put(setCarts(response));
  } catch (err: unknown) {
    // const error = err as AxiosError<>;
  }
}

export function* CartSaga() {
  yield takeLatest(FETCH_CARTS, fetchCartsRequest);
}
