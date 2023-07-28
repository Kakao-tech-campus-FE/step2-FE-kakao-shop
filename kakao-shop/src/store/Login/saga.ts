import { signInAPI } from '@apis/Login';
import type { SignInResponse } from '@apis/Login';
import { AxiosError, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { setCookie } from '@utils/cookie';

import { SIGN_IN_REQUEST, signInSuccessAction, signInFailureAction, SignInRequestAction } from './reducers';

export function* watchSignIn({ payload }: SignInRequestAction) {
  try {
    const response: AxiosResponse<SignInResponse> = yield call(signInAPI, payload);
    setCookie({ name: 'accessToken', value: response.headers.authorization, maxAge: 360000 });
    yield put(signInSuccessAction(response.data));
    payload.navigate('/');
  } catch (err: unknown) {
    const error = err as AxiosError<SignInResponse>;
    yield put(signInFailureAction(error));
    payload.setErrorMessage(error.response?.data.error?.message);
  }
}

export function* signInSaga() {
  yield takeLatest(SIGN_IN_REQUEST, watchSignIn);
}
