import type { SignInRequest, SignInResponse } from '@apis/Login';
import { AxiosError } from 'axios';
import { produce, Draft } from 'immer';

import { getCookie, deleteCookie } from '@utils/cookie';

// ActionTypes
export const SIGN_IN_REQUEST = 'signIn/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'signIn/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'signIn/SIGN_IN_FAILURE';

// 비동기 요청 액션이 아닌 경우 REQUSET, SUCCESS, FAILURE 로 나누지 않고 하나의 액션으로 처리
export const RESET_SIGN_IN_STATE = 'signIn/RESET_SIGN_IN_STATE';

export const SIGN_OUT = 'signout/SIGN_OUT';

// ActionCreators
export const signInRequestAction = (payload: SignInRequest): SignInRequestAction => ({
  type: SIGN_IN_REQUEST,
  payload,
});

export const signInSuccessAction = (payload: SignInResponse): SignInAction => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

export const signInFailureAction = (payload: AxiosError<SignInResponse>): SignInFailureAction => ({
  type: SIGN_IN_FAILURE,
  payload,
});

export const signOutAction = (): SignOutAction => ({
  type: SIGN_OUT,
});

export const resetSignInStateAction = (): ResetSignInStateAction => ({
  type: RESET_SIGN_IN_STATE,
});

// Initial State
export const initialState: SignInState = {
  isLogin: !!getCookie('accessToken'),
  success: false,
  response: null,
  error: null,
};

// Reducer
export const signInReducer = produce((draft: Draft<SignInState>, action: SignInActions) => {
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

    case SIGN_OUT:
      draft.isLogin = false;
      deleteCookie('accessToken');
      break;

    default:
      break;
  }
}, initialState);

// ActionCreatorsTypes
export type SignInActions = SignInAction | SignOutAction | ResetSignInStateAction;

export type SignInRequestAction = {
  type: typeof SIGN_IN_REQUEST;
  payload: SignInRequest;
};

export type SignInAction = {
  type: typeof SIGN_IN_SUCCESS | typeof SIGN_IN_FAILURE;
  payload: SignInResponse;
};

export type SignInFailureAction = {
  type: typeof SIGN_IN_SUCCESS | typeof SIGN_IN_FAILURE;
  payload: AxiosError<SignInResponse>;
};

export type SignOutAction = {
  type: typeof SIGN_OUT;
};

export type ResetSignInStateAction = {
  type: typeof RESET_SIGN_IN_STATE;
};

// StateType
export type SignInState = {
  isLogin: boolean;
  success: boolean;
  response: null;
  error: AxiosError<SignInResponse> | null;
};
