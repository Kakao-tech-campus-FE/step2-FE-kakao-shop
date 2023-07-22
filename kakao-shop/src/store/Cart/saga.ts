import { getCartsAPI, updateCartsAPI } from '@apis/Cart';
import {
  GET_CARTS_REQUEST,
  UPDATE_CARTS_REQUEST,
  getCartsSuccessAction,
  UpdateCartsRequestAction,
} from '@store/Cart/reducers';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* watchGetCarts(): any {
  try {
    const response = yield call(getCartsAPI);
    yield put(getCartsSuccessAction(response));
  } catch (err: unknown) {
    // const error = err as AxiosError<>;
  }
}

export function* watchUpdateCarts({ payload }: UpdateCartsRequestAction): any {
  try {
    yield call(updateCartsAPI, payload);
    const response = yield call(getCartsAPI);
    yield put(getCartsSuccessAction(response));
  } catch (err: unknown) {
    // const error = err as AxiosError<>;
  }
}

export function* CartSaga() {
  yield takeLatest(GET_CARTS_REQUEST, watchGetCarts);
  yield takeLatest(UPDATE_CARTS_REQUEST, watchUpdateCarts);
}
