import { AxiosError } from 'axios';
import { produce, Draft } from 'immer';

export const FETCH_PRODUCT_DATA = 'home/FETCH_PRODUCT_DATA';
export const SET_PRODUCT_DATA = 'home/SET_PRODUCT_DATA';
export const SET_PRODUCT_LOADING_STATE = 'home/SET_PRODUCT_LOADING_STATE';
export const SET_PRODUCT_ERROR_STATE = 'home/SET_PRODUCT_ERROR_STATE';
export const RESET_HOME_STATE = 'home/RESET_HOME_STATE';

export const productDataRequest = (payload: number = 0): FetchProductDataAction => ({
  type: FETCH_PRODUCT_DATA,
  payload,
});

export const setProductData = (payload: ProductResponse): SetProductDataAction => ({
  type: SET_PRODUCT_DATA,
  payload,
});

export const setProductLoadingState = (): SetProductLoadingStateAction => ({
  type: SET_PRODUCT_LOADING_STATE,
});

export const resetHomeState = (): ResetHomeStateAction => ({
  type: RESET_HOME_STATE,
});

export const setProductErrorState = (payload: AxiosError): SetProductErrorStateAction => ({
  type: SET_PRODUCT_ERROR_STATE,
  payload,
});

export const initialState: HomeState = {
  isLoading: false,
  error: null,
  products: [],
};

export const homeReducer = produce(
  (
    draft: Draft<HomeState>,
    action: SetProductDataAction | SetProductLoadingStateAction | ResetHomeStateAction | SetProductErrorStateAction,
  ) => {
    switch (action.type) {
      case SET_PRODUCT_LOADING_STATE:
        draft.isLoading = true;
        break;

      case SET_PRODUCT_DATA:
        draft.products.push(...action.payload.response);
        draft.isLoading = false;
        break;

      case SET_PRODUCT_ERROR_STATE:
        draft.error = action.payload;
        break;

      case RESET_HOME_STATE:
        draft.isLoading = false;
        draft.products = [];
        draft.error = null;
        break;

      default:
        break;
    }
  },
  initialState,
);

export type FetchProductDataAction = {
  type: typeof FETCH_PRODUCT_DATA;
  payload: number;
};

export type SetProductDataAction = {
  type: typeof SET_PRODUCT_DATA;
  payload: ProductResponse;
};

export type SetProductLoadingStateAction = {
  type: typeof SET_PRODUCT_LOADING_STATE;
};

export type SetProductErrorStateAction = {
  type: typeof SET_PRODUCT_ERROR_STATE;
  payload: AxiosError;
};

export type ResetHomeStateAction = {
  type: typeof RESET_HOME_STATE;
};

export type ProductResponse = {
  sucess: boolean;
  response: Product[];
  error: boolean;
};

export type Product = {
  id: number;
  productName: string;
  description: string;
  image: string;
  price: number;
  starCount?: number;
  options?: Option[];
};

export type Option = {
  id: number;
  optionName: string;
  price: number;
};

export type HomeState = {
  isLoading: boolean;
  error: AxiosError | null;
  products: Product[];
};
