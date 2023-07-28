import type { OrderResponse, PaymentResponse } from '@apis/Order';
import { approveAPI, orderAPI, paymentAPI } from '@apis/Order';
import {
  APPROVE_REQUEST,
  ApproveRequestAction,
  ORDER_PRODUCT_REQUEST,
  PAYMENT_REQUEST,
  PaymentRequestAction,
  approveSuccessAction,
  orderProductFailureAction,
  orderProductRequestAction,
  orderProductSuccessAction,
  paymenSuccessAction,
  popupCloseAction,
} from '@store/Order/reducers';
import type { AxiosError, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* watchOrder() {
  try {
    const response: AxiosResponse<OrderResponse> = yield call(orderAPI);
    yield put(orderProductSuccessAction(response));
  } catch (err: unknown) {
    const error = err as AxiosError<OrderResponse>;
    yield put(orderProductFailureAction(error));
  }
}

export function* watchPayment({ payload }: PaymentRequestAction) {
  try {
    const response: AxiosResponse<PaymentResponse> = yield call(paymentAPI, payload);
    yield put(paymenSuccessAction(response));
  } catch (err: unknown) {
    // const error = err as AxiosError<OrderResponse>;
  }
}

export function* watchApprove({ payload }: ApproveRequestAction) {
  try {
    yield call(approveAPI, payload);
    yield put(approveSuccessAction());
    yield put(orderProductRequestAction());
    const response: AxiosResponse<OrderResponse> = yield call(orderAPI);
    yield put(orderProductSuccessAction(response));
    yield put(popupCloseAction());
  } catch (err: unknown) {
    // const error = err as AxiosError<OrderResponse>;
  }
}

export function* OrderSaga() {
  yield takeLatest(ORDER_PRODUCT_REQUEST, watchOrder);
  yield takeLatest(PAYMENT_REQUEST, watchPayment);
  yield takeLatest(APPROVE_REQUEST, watchApprove);
}
