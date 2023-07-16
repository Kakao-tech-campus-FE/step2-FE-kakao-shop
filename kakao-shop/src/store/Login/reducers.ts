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

export const signInFailure = (payload: SignInErrorResponse): SignInErrorAction => ({
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
  (draft: Draft<SignInState>, action: SignInAction | SignOutAction | SignInErrorAction | ResetSignInStateAction) => {
    switch (action.type) {
      case SIGN_IN_SUCCESS:
        draft.isLogin = !!getCookie('accessToken');
        draft.success = action.payload.success;
        draft.response = action.payload.response;
        draft.error = action.payload.error;
        break;

      case SIGN_IN_FAILURE:
        const payload = action.payload as SignInErrorResponse; // SignInResponse 과 SignInErrorResponse 의 엔티티가 달라서 타입 오류가 발생하였음. 이를 해결하기 위해서 타입 단언을 사용.
        draft.success = payload.success;
        draft.response = payload.response;
        draft.error = { method: payload.method, message: payload.error!.message, status: payload.error!.status }; // SIGN_IN_FAILURE 액션이 발생할떄 payload.error === null 일 수 없기때문에 non-null assertion operator 를 사용해도 된다고 생각하였음.
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
  error: ErrorType | null;
};

export type SignInResponse = {
  success: boolean;
  response: null;
  error: ErrorType | null;
};

export type SignInErrorResponse = {
  method: string;
} & SignInResponse;

export type ErrorType = {
  method: string;
  message: string;
  status: number;
};

export type SignInAction = {
  type: typeof SIGN_IN_SUCCESS | typeof SIGN_IN_FAILURE;
  payload: SignInResponse;
};

export type SignInErrorAction = {
  type: typeof SIGN_IN_SUCCESS | typeof SIGN_IN_FAILURE;
  payload: SignInErrorResponse;
};

export type SignOutAction = {
  type: typeof SIGN_OUT_REQUEST;
};

export type ResetSignInStateAction = {
  type: typeof RESET_SIGN_IN_STATE;
};
