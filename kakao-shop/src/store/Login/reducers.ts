import { AxiosError } from 'axios';
import { produce, Draft } from 'immer';

import { SignInRequest } from '@hooks/page/Login/useLoginForm';

import { getCookie, deleteCookie } from '@utils/cookie';

export const SIGN_IN_REQUEST = 'signIn/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'signIn/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'signIn/SIGN_IN_FAILURE';
export const RESET_SIGN_IN_STATE = 'signIn/RESET_SIGN_IN_STATE';

export const SIGN_OUT_REQUEST = 'signout/SIGN_OUT_REQUEST'; // 비동기 요청이 아니므로 REQUEST 타입만 만들었음.

export const signInRequest = (payload: SignInRequest): FetchSignInAction => ({
  type: SIGN_IN_REQUEST,
  payload,
});

export const signInSuccess = (payload: SignInResponse): SignInAction => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

export const signInFailure = (payload: AxiosError<SignInResponse>): SignInErrorAction => ({
  type: SIGN_IN_FAILURE,
  payload,
});

export const signOutRequest = (): SignOutAction => ({
  type: SIGN_OUT_REQUEST,
});

export const resetSignInState = (): ResetSignInStateAction => ({
  type: RESET_SIGN_IN_STATE,
});

export const initialState: SignInState = {
  isLogin: !!getCookie('accessToken'),
  success: false,
  response: null,
  error: null,
};

export const signInReducer = produce(
  (draft: Draft<SignInState>, action: SignInAction | SignOutAction | ResetSignInStateAction) => {
    switch (action.type) {
      case SIGN_IN_SUCCESS:
        draft.isLogin = !!getCookie('accessToken');
        draft.success = action.payload.success;
        draft.response = action.payload.response;
        draft.error = action.payload.error as null;
        break;

      case SIGN_IN_FAILURE:
        const payload = action.payload as unknown as AxiosError<SignInResponse>;
        draft.success = payload.response?.data.success ? payload.response?.data.success : false; // 서버에서 보내주는 약속 데이터가 예기치 못한 오류가 발생할 경우 응답으로 오지않을 수 있으므로 기본값 설정
        draft.response = payload.response?.data.response ? payload.response?.data.response : null;
        draft.error = payload;
        break;

      case RESET_SIGN_IN_STATE:
        draft.isLogin = !!getCookie('accessToken');
        draft.success = false;
        draft.response = null;
        draft.error = null;
        break;

      case SIGN_OUT_REQUEST:
        draft.isLogin = false;
        deleteCookie('accessToken');
        break;

      default:
        break;
    }
  },
  initialState,
);

export type FetchSignInAction = {
  type: typeof SIGN_IN_REQUEST;
  payload: SignInRequest;
};

export type SignInState = {
  isLogin: boolean;
  success: boolean;
  response: null;
  error: AxiosError<SignInResponse> | null;
};

export type SignInResponse = {
  success: boolean;
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

export type SignInErrorAction = {
  type: typeof SIGN_IN_SUCCESS | typeof SIGN_IN_FAILURE;
  payload: AxiosError<SignInResponse>;
};

export type SignOutAction = {
  type: typeof SIGN_OUT_REQUEST;
};

export type ResetSignInStateAction = {
  type: typeof RESET_SIGN_IN_STATE;
};
