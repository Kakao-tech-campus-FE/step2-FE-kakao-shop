import type { SignUpRequest, DuplicateEmailCheckRequest, SignUpResponse } from '@apis/SignUp';
import { AxiosError } from 'axios';
import { produce, Draft } from 'immer';

// ActionTypes
export const SIGN_UP_REQUEST = 'signUp/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'signUp/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'signUp/SIGN_UP_FAILURE';

export const DUPLICATE_EMAIL_CHECK_REQUEST = 'signUp/DUPLICATE_EMAIL_CHECK_REQUEST';
export const DUPLICATE_EMAIL_CHECK_SUCCESS = 'signUp/DUPLICATE_EMAIL_CHECK_SUCCESS';
export const DUPLICATE_EMAIL_CHECK_FAILURE = 'signUp/DUPLICATE_EMAIL_CHECK_FAILURE';

// ActionCreators
export const signUpRequestAction = (payload: SignUpRequest): SignUpRequestAction => ({
  type: SIGN_UP_REQUEST,
  payload,
});

export const signUpSuccessAction = (payload: SignUpResponse): SignUpSuccessAction => ({
  type: SIGN_UP_SUCCESS,
  payload,
});

export const signUpFailureAction = (payload: SignUpResponse): SignUpFailureAction => ({
  type: SIGN_UP_FAILURE,
  payload,
});

export const duplicateEmailCheckRequestAction = (
  payload: DuplicateEmailCheckRequest,
): DuplicateEmailCheckRequestAction => ({
  type: DUPLICATE_EMAIL_CHECK_REQUEST,
  payload,
});

// Initial State
export const initialState: SignUpState = {
  success: false,
  response: null,
  error: null,
};

// Reducer
export const signUpReducer = produce((draft: Draft<SignUpResponse>, action: SignUpActions) => {
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

// ActionCreatorsTypes
export type SignUpActions = SignUpSuccessAction | SignUpFailureAction;

export type SignUpRequestAction = {
  type: typeof SIGN_UP_REQUEST;
  payload: SignUpRequest;
};

export type DuplicateEmailCheckRequestAction = {
  type: typeof DUPLICATE_EMAIL_CHECK_REQUEST;
  payload: DuplicateEmailCheckRequest;
};

export type SignUpSuccessAction = {
  type: typeof SIGN_UP_SUCCESS;
  payload: SignUpResponse;
};

export type SignUpFailureAction = {
  type: typeof SIGN_UP_FAILURE;
  payload: SignUpResponse;
};

// StateType
export type SignUpState = {
  success: boolean;
  response: null;
  error: AxiosError<SignUpResponse> | null;
};
