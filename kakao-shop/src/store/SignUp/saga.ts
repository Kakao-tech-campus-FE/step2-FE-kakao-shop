import { signUp } from '@apis/SignUp';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { SIGN_UP_REQUEST, FetchSignUpAction, signUpSuccess, SignUpResponse, signUpFailure } from './reducers';

export function* fetchSignUpRequest({ payload }: FetchSignUpAction) {
  try {
    const response: AxiosResponse<SignUpResponse> = yield call(signUp, payload);
    yield put(signUpSuccess(response.data));
    payload.navigate('/login');
  } catch (error: any) {
    yield put(signUpFailure(error.response.data));
  }
}

export function* signUpSaga() {
  yield takeLatest(SIGN_UP_REQUEST, fetchSignUpRequest);
}
