import type { Error } from '@apis/Login';
import type { SignUpRequest, DuplicateEmailCheckRequest } from '@apis/SignUp';
import { produce, Draft } from 'immer';

export const SIGN_UP_REQUEST = 'signUp/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'signUp/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'signUp/SIGN_UP_FAILURE';

export const DUPLICATE_EMAIL_CHECK_REQUEST = 'signUp/DUPLICATE_EMAIL_CHECK_REQUEST';
export const DUPLICATE_EMAIL_CHECK_SUCCESS = 'signUp/DUPLICATE_EMAIL_CHECK_SUCCESS';
export const DUPLICATE_EMAIL_CHECK_FAILURE = 'signUp/DUPLICATE_EMAIL_CHECK_FAILURE';

export const signUpRequestAction = (payload: SignUpRequest): SignUpRequestAction => ({
  type: SIGN_UP_REQUEST,
  payload,
});

export const signUpSuccessAction = (payload: SignUpResponse): SignUpSuccessAction => ({
  type: SIGN_UP_SUCCESS,
  payload,
});

export const signUpFailureAction = (payload: SignUpResponse): SignUpSuccessAction => ({
  type: SIGN_UP_FAILURE,
  payload,
});

export const duplicateEmailCheckRequestAction = (
  payload: DuplicateEmailCheckRequest,
): DuplicateEmailCheckRequestAction => ({
  type: DUPLICATE_EMAIL_CHECK_REQUEST,
  payload,
});

export const initialState: SignUpResponse = {
  success: false,
  response: null,
  error: null,
};

export const signUpReducer = produce((draft: Draft<SignUpResponse>, action: SignUpSuccessAction) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      draft.success = action.payload.success;
      draft.response = action.payload.response;
      draft.error = action.payload.error;
      break;

    case SIGN_UP_FAILURE:
      draft.success = action.payload.success;
      draft.response = action.payload.response;
      draft.error = action.payload.error;
      break;

    default:
      break;
  }
}, initialState);

export type SignUpRequestAction = {
  type: typeof SIGN_UP_REQUEST;
  payload: SignUpRequest;
};

export type DuplicateEmailCheckRequestAction = {
  type: typeof DUPLICATE_EMAIL_CHECK_REQUEST;
  payload: DuplicateEmailCheckRequest;
};

export type SignUpResponse = {
  success: boolean;
  response: null;
  error: Error | null;
};

export type SignUpSuccessAction = {
  type: typeof SIGN_UP_SUCCESS | typeof SIGN_UP_FAILURE;
  payload: SignUpResponse;
};
