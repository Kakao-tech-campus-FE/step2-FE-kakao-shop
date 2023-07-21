import { getCarts, postCarts } from '@apis/Cart';
import { FETCH_CARTS, UPDATE_CARTS, setCarts, setLoadingState, ApdateCartsAction } from '@store/Cart/reducers';
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

export function* ApdateCartsRequest({ payload }: ApdateCartsAction): any {
  try {
    yield put(setLoadingState());
    yield call(postCarts, payload);
  } catch (err: unknown) {
    // const error = err as AxiosError<>;
  }
}

export function* CartSaga() {
  yield takeLatest(FETCH_CARTS, fetchCartsRequest);
  yield takeLatest(UPDATE_CARTS, ApdateCartsRequest);
}
