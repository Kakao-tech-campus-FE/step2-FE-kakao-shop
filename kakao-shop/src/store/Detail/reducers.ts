import { Product } from '@store/Home/reducers';
import { AxiosError, AxiosResponse } from 'axios';
import { produce, Draft } from 'immer';

export const FETCH_PRODUCT_DETAIL = 'home/FETCH_PRODUCT_DETAIL';
export const SET_PRODUCT_DETAIL = 'home/SET_PRODUCT_DETAIL';

export const productDetailRequest = (payload: string): FetchProductDetailAction => ({
  type: FETCH_PRODUCT_DETAIL,
  payload,
});

export const setProductDetail = (payload: AxiosResponse<ProductDetailResponse>): SetProductDetailAction => ({
  type: SET_PRODUCT_DETAIL,
  payload,
});

export const initialState: DetailState = {
  isLoading: false,
  error: null,
  product: undefined,
};

export const DetailReducer = produce((draft: Draft<DetailState>, action: SetProductDetailAction) => {
  switch (action.type) {
    case SET_PRODUCT_DETAIL:
      draft.product = action.payload.data.response;
      draft.isLoading = false;
      break;
  }
}, initialState);

export type DetailState = {
  isLoading: boolean;
  error: AxiosError | null;
  product?: Product;
};

export type FetchProductDetailAction = {
  type: typeof FETCH_PRODUCT_DETAIL;
  payload: string;
};

export type ProductDetailResponse = {
  sucess: boolean;
  response: Product;
  error: boolean;
};

export type SetProductDetailAction = {
  type: typeof SET_PRODUCT_DETAIL;
  payload: AxiosResponse<ProductDetailResponse>;
};
