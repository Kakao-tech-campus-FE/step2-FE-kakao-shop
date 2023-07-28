import type { AddCartItemRequest, GetProductDetailResponse } from '@apis/Detail';
import { AxiosError, AxiosResponse } from 'axios';
import { produce, Draft } from 'immer';
import type { ProductDetail } from 'types/product';

// ActionTypes
export const GET_PRODUCT_DETAIL_REQUEST = 'detail/GET_PRODUCT_DETAIL_REQUEST';
export const GET_PRODUCT_DETAIL_SUCCESS = 'detail/GET_PRODUCT_DETAIL_SUCCESS';
export const GET_PRODUCT_DETAIL_FAILURE = 'detail/GET_PRODUCT_DETAIL_FAILURE';

export const ADD_CART_ITEM_REQUEST = 'detail/ADD_CART_ITEM_REQUEST';

export const getProductDetailRequestAction = (payload: string): GetProductDetailRequestAction => ({
  type: GET_PRODUCT_DETAIL_REQUEST,
  payload,
});

// ActionCreators
export const getProductDetailSuccessAction = (
  payload: AxiosResponse<GetProductDetailResponse>,
): GetProductDetailSuccessAction => ({
  type: GET_PRODUCT_DETAIL_SUCCESS,
  payload,
});

export const getProductDetailFailureAction = (
  payload: AxiosError<GetProductDetailResponse>,
): GetProductDetailFailureAction => ({
  type: GET_PRODUCT_DETAIL_FAILURE,
  payload,
});

export const addCartItemAction = (payload: AddCartItemRequest[]): AddCartItemAction => ({
  type: ADD_CART_ITEM_REQUEST,
  payload,
});

// Initial State
export const initialState: DetailState = {
  isLoading: false,
  error: null,
  product: {} as ProductDetail,
};

// Reducer
export const DetailReducer = produce((draft: Draft<DetailState>, action: DetailActions) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_REQUEST:
      draft.isLoading = true;
      break;

    case GET_PRODUCT_DETAIL_SUCCESS:
      draft.product = action.payload.data.response;
      draft.isLoading = false;
      break;

    case GET_PRODUCT_DETAIL_FAILURE:
      draft.error = action.payload;
      break;
  }
}, initialState);

// ActionCreatorsTypes
export type DetailActions =
  | GetProductDetailRequestAction
  | GetProductDetailSuccessAction
  | AddCartItemAction
  | GetProductDetailFailureAction;

export type GetProductDetailRequestAction = {
  type: typeof GET_PRODUCT_DETAIL_REQUEST;
  payload: string;
};

export type GetProductDetailSuccessAction = {
  type: typeof GET_PRODUCT_DETAIL_SUCCESS;
  payload: AxiosResponse<GetProductDetailResponse>;
};

export type GetProductDetailFailureAction = {
  type: typeof GET_PRODUCT_DETAIL_FAILURE;
  payload: AxiosError<GetProductDetailResponse>;
};

export type AddCartItemAction = {
  type: typeof ADD_CART_ITEM_REQUEST;
  payload: AddCartItemRequest[];
};

// StateType
export type DetailState = {
  isLoading: boolean;
  error: AxiosError | null;
  product: ProductDetail;
};
