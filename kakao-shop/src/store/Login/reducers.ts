import { produce, Draft } from 'immer';

import { SignInRequest } from '@hooks/ui/useLoginForm';

import { getCookie, deleteCookie } from '@utils/cookie';

export const SIGN_IN_REQUEST = 'signIn/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'signIn/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'signIn/SIGN_IN_FAILURE';

export const SIGN_OUT_REQUEST = 'signout/SIGN_OUT_REQUEST'; // 비동기 요청이 아니므로 REQUEST 타입만 만들었음.

export const signInRequest = (payload: SignInRequest): FetchSignInAction => ({
  type: SIGN_IN_REQUEST,
  payload,
});

export const signInSuccess = (payload: SignInResponse): SignInAction => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

export const signInFailure = (payload: SignInResponse): SignInAction => ({
  type: SIGN_IN_FAILURE,
  payload,
});

export const signOutRequest = (): SignOutAction => ({
  type: SIGN_OUT_REQUEST,
});

export const initialState: SignInState = {
  isLogin: !!getCookie('accessToken'),
  success: false,
  response: null,
  error: null,
};

export const signInReducer = produce((draft: Draft<SignInState>, action: SignInAction | SignOutAction) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      draft.isLogin = !!getCookie('accessToken');
      draft.success = action.payload.success;
      draft.response = action.payload.response;
      draft.error = action.payload.error;
      break;

    case SIGN_IN_FAILURE:
      draft.success = action.payload.success;
      draft.response = action.payload.response;
      draft.error = action.payload.error;
      break;

    case SIGN_OUT_REQUEST:
      draft.isLogin = false;
      deleteCookie('accessToken');
      break;

    default:
      break;
  }
}, initialState);

export type FetchSignInAction = {
  type: typeof SIGN_IN_REQUEST;
  payload: SignInRequest;
};

export type SignInState = {
  isLogin: Boolean;
  success: Boolean;
  response: null;
  error: ErrorType | null;
};

export type SignInResponse = {
  success: Boolean;
  response: null;
  error: ErrorType | null;
};

export type ErrorType = {
  message: string;
  status: number;
};

export type SignInAction = {
  type: typeof SIGN_IN_SUCCESS | typeof SIGN_IN_FAILURE;
  payload: SignInResponse;
};

export type SignOutAction = {
  type: typeof SIGN_OUT_REQUEST;
};
