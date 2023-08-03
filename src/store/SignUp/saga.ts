import { signUpAPI, duplicateEmailCheckAPI } from '@apis/SignUp';
import type { SignUpResponse } from '@apis/SignUp';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  SIGN_UP_REQUEST,
  DUPLICATE_EMAIL_CHECK_REQUEST,
  SignUpRequestAction,
  DuplicateEmailCheckRequestAction,
  signUpSuccessAction,
  signUpFailureAction,
} from './reducers';

export function* watchSignUp({ payload }: SignUpRequestAction) {
  try {
    const response: AxiosResponse<SignUpResponse> = yield call(signUpAPI, payload);
    yield put(signUpSuccessAction(response.data));
    payload.navigate('/login');
  } catch (error: any) {
    yield put(signUpFailureAction(error.response.data));
  }
}

export function* watchDuplicateEmailCheck({ payload }: DuplicateEmailCheckRequestAction) {
  const { email, setErrorMessage, setIsUniqueEmail } = payload;

  try {
    const response: AxiosResponse<SignUpResponse> = yield call(duplicateEmailCheckAPI, email);
    setIsUniqueEmail(response.data.success);
    alert('사용가능한 이메일입니다.');
  } catch (e: any) {
    setErrorMessage(e.response.data.error.message);
  }
}

export function* signUpSaga() {
  yield takeLatest(SIGN_UP_REQUEST, watchSignUp);
  yield takeLatest(DUPLICATE_EMAIL_CHECK_REQUEST, watchDuplicateEmailCheck);
}
