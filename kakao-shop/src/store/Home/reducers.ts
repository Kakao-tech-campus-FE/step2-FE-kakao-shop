import type { GetProductsResponse } from '@apis/Home';
import { AxiosError } from 'axios';
import { produce, Draft } from 'immer';
import type { Product } from 'types/product';

// ActionTypes
export const GET_PRODUCTS_REQUEST = 'home/GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'home/GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'home/GET_PRODUCTS_FAILURE';

export const RESET_HOME_STATE = 'home/RESET_HOME_STATE';
export const SET_PAGE_STATE = 'home/SET_PAGE_STATE';

// ActionCreators
export const getProductsRequestAction = (payload: number = 0): GetProductsRequestAction => ({
  type: GET_PRODUCTS_REQUEST,
  payload,
});

export const getProductsSuccessAction = (payload: GetProductsResponse): GetProductsSuccessAction => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailureAction = (payload: AxiosError): GetProductsFailureAction => ({
  type: GET_PRODUCTS_FAILURE,
  payload,
});

export const resetHomeStateAction = (): ResetHomeStateAction => ({
  type: RESET_HOME_STATE,
});

export const setPageStateAction = (payload: number): SetPageStateAction => ({
  type: SET_PAGE_STATE,
  payload,
});

// Initial State
export const initialState: HomeState = {
  isLoading: false,
  error: null,
  products: [],
  page: 0,
};

// Reducer
export const homeReducer = produce((draft: Draft<HomeState>, action: HomeActions) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      draft.isLoading = true;
      break;

    case GET_PRODUCTS_SUCCESS:
      draft.products.push(...action.payload.response);
      draft.isLoading = false;
      break;

    case GET_PRODUCTS_FAILURE:
      draft.error = action.payload;
      break;

    case RESET_HOME_STATE:
      draft.isLoading = false;
      draft.products = [];
      draft.error = null;
      draft.page = 0;
      break;

    case SET_PAGE_STATE:
      draft.page = action.payload;
      break;

    default:
      break;
  }
}, initialState);

// ActionCreatorsTypes
export type HomeActions =
  | GetProductsRequestAction
  | GetProductsSuccessAction
  | ResetHomeStateAction
  | GetProductsFailureAction
  | SetPageStateAction;

export type GetProductsRequestAction = {
  type: typeof GET_PRODUCTS_REQUEST;
  payload: number;
};

export type GetProductsSuccessAction = {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: GetProductsResponse;
};

export type GetProductsFailureAction = {
  type: typeof GET_PRODUCTS_FAILURE;
  payload: AxiosError;
};

export type ResetHomeStateAction = {
  type: typeof RESET_HOME_STATE;
};

export type SetPageStateAction = {
  type: typeof SET_PAGE_STATE;
  payload: number;
};

// StateType
export type HomeState = {
  isLoading: boolean;
  error: AxiosError | null;
  products: Product[];
  page: number;
};
