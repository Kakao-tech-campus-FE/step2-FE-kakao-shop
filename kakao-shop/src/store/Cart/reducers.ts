import { Option } from '@store/Home/reducers';
import { AxiosError, AxiosResponse } from 'axios';
import { produce, Draft } from 'immer';

import { SubmitData } from '@hooks/page/Cart/useCartForm';

export const SET_CARTS_LOADING_STATE = 'cart/SET_CARTS_LOADING_STATE';
export const FETCH_CARTS = 'cart/FETCH_PRODUCT_DETAIL';
export const SET_CARTS = 'cart/SET_CARTS';
export const UPDATE_CARTS = 'cart/UPDATE_CARTS';

export const setLoadingState = (): SetCartLoadingStateAction => ({
  type: SET_CARTS_LOADING_STATE,
});

export const cartsRequest = (): FetchCartsAction => ({
  type: FETCH_CARTS,
});

export const setCarts = (payload: AxiosResponse<CartsResponse>): SetCartsAction => ({
  type: SET_CARTS,
  payload,
});

export const updateCarts = (payload: SubmitData[]): ApdateCartsAction => ({
  type: UPDATE_CARTS,
  payload,
});

export const initialState: CartState = {
  isLoading: false,
  error: null,
  cart: [],
  totalPrice: 0,
};

export const CartReducer = produce((draft: Draft<CartState>, action: SetCartLoadingStateAction | SetCartsAction) => {
  switch (action.type) {
    case SET_CARTS_LOADING_STATE:
      draft.isLoading = true;
      break;

    case SET_CARTS:
      draft.cart = action.payload.data.response.products;
      draft.totalPrice = action.payload.data.response.totalPrice;
      break;
  }
}, initialState);

export type SetCartLoadingStateAction = {
  type: typeof SET_CARTS_LOADING_STATE;
};

export type FetchCartsAction = {
  type: typeof FETCH_CARTS;
};

export type SetCartsAction = {
  type: typeof SET_CARTS;
  payload: AxiosResponse<CartsResponse>;
};

export type ApdateCartsAction = {
  type: typeof UPDATE_CARTS;
  payload: SubmitData[];
};

export type CartsResponse = {
  sucess: boolean;
  response: {
    products: Product[];
    totalPrice: number;
  };
  error: boolean;
};

export type CartState = {
  isLoading: boolean;
  error: AxiosError | null;
  cart: Product[];
  totalPrice: number;
};

export type Product = {
  id: number;
  productName: string;
  carts: Cart[];
};

export type Cart = {
  id: number;
  option: Option;
  quantity: number;
  price: number;
};
