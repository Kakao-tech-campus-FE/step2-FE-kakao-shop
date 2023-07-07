import { signIn } from '@apis/Login';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { setCookie } from '@utils/cookie';

import { SIGN_IN_REQUEST, FetchSignInAction, signInSuccess, SignInResponse, signInFailure } from './reducers';

export function* fetchSignInRequest({ payload }: FetchSignInAction) {
  try {
    const response: AxiosResponse<SignInResponse> = yield call(signIn, payload);
    setCookie({ name: 'accessToken', value: response.headers.authorization, maxAge: 36000 });
    yield put(signInSuccess(response.data));
    payload.navigate('/');
  } catch (error: any) {
    yield put(signInFailure(error.response.data));
    payload.setErrorMessage(error.response.data.error.message);
  }
}

export function* signInSaga() {
  yield takeLatest(SIGN_IN_REQUEST, fetchSignInRequest);
}
