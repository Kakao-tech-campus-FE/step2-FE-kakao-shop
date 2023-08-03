import type { UpdateCartsRequest, GetCartsResponse } from '@apis/Cart';
import { AxiosError, AxiosResponse } from 'axios';
import { produce, Draft } from 'immer';
import type { CartProduct } from 'types/product';

// ActionTypes
export const GET_CARTS_REQUEST = 'cart/GET_CARTS_REQUEST';
export const GET_CARTS_SUCCESS = 'cart/GET_CARTS_SUCCESS';
export const GET_CARTS_FAILURE = 'cart/GET_CARTS_FAILURE';

export const UPDATE_CARTS_REQUEST = 'cart/UPDATE_CARTS_REQUEST';

// ActionCreators
export const getCartsRequestAction = (): GetCartsRequestAction => ({
  type: GET_CARTS_REQUEST,
});

export const getCartsSuccessAction = (payload: AxiosResponse<GetCartsResponse>): GetCartsSuccessAction => ({
  type: GET_CARTS_SUCCESS,
  payload,
});

export const updateCartsRequestAction = (payload: UpdateCartsRequest[]): UpdateCartsRequestAction => ({
  type: UPDATE_CARTS_REQUEST,
  payload,
});

// Initial State
export const initialState: CartState = {
  isLoading: false,
  error: null,
  cart: [],
  totalPrice: 0,
};

// Reducer
export const CartReducer = produce((draft: Draft<CartState>, action: CartActions) => {
  switch (action.type) {
    case GET_CARTS_REQUEST:
      draft.isLoading = true;
      break;

    case GET_CARTS_SUCCESS:
      draft.cart = action.payload.data.response.products;
      draft.totalPrice = action.payload.data.response.totalPrice;
      draft.isLoading = false;
      break;
  }
}, initialState);

// ActionCreatorsTypes
export type CartActions = GetCartsRequestAction | GetCartsSuccessAction;

export type GetCartsRequestAction = {
  type: typeof GET_CARTS_REQUEST;
};

export type GetCartsSuccessAction = {
  type: typeof GET_CARTS_SUCCESS;
  payload: AxiosResponse<GetCartsResponse>;
};

export type UpdateCartsRequestAction = {
  type: typeof UPDATE_CARTS_REQUEST;
  payload: UpdateCartsRequest[];
};

// StateType
export type CartState = {
  isLoading: boolean;
  error: AxiosError | null;
  cart: CartProduct[];
  totalPrice: number;
};
