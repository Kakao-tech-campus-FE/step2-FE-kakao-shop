import { signUp, getDuplicateCheck } from '@apis/SignUp';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  SIGN_UP_REQUEST,
  EMAIL_DUPLICATE_CHECK_REQUEST,
  FetchSignUpAction,
  FetchEmailDuplicateCheckAction,
  signUpSuccess,
  signUpFailure,
  SignUpResponse,
} from './reducers';

export function* fetchSignUpRequest({ payload }: FetchSignUpAction) {
  try {
    const response: AxiosResponse<SignUpResponse> = yield call(signUp, payload);
    yield put(signUpSuccess(response.data));
    payload.navigate('/login');
  } catch (error: any) {
    yield put(signUpFailure(error.response.data));
  }
}

export function* fetchEmailDuplicateRequest({ payload }: FetchEmailDuplicateCheckAction) {
  const { email, setErrorMessage, setIsUniqueEmail } = payload;

  try {
    const response: AxiosResponse<SignUpResponse> = yield call(getDuplicateCheck, email);
    setIsUniqueEmail(response.data.success);
    alert('사용가능한 이메일입니다.');
  } catch (e: any) {
    setErrorMessage(e.response.data.error.message);
  }
}

export function* signUpSaga() {
  yield takeLatest(SIGN_UP_REQUEST, fetchSignUpRequest);
  yield takeLatest(EMAIL_DUPLICATE_CHECK_REQUEST, fetchEmailDuplicateRequest);
}
