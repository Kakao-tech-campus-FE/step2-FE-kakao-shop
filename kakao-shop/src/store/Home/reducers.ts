import { produce, Draft } from 'immer';

export const FETCH_PRODUCT_DATA = 'home/FETCH_PRODUCT_DATA';
export const SET_PRODUCT_DATA = 'home/SET_PRODUCT_DATA';
export const SET_PRODUCT_LOADING_STATE = 'home/SET_PRODUCT_LOADING_STATE';

export const productDataRequest = (): FetchProductDataAction => ({
  type: FETCH_PRODUCT_DATA,
});

export const setProductData = (payload: ProductResponse): SetProductDataAction => ({
  type: SET_PRODUCT_DATA,
  payload,
});

export const setProductLoadingState = (): SetProductLoadingStateAction => ({
  type: SET_PRODUCT_LOADING_STATE,
});

export const initialState: HomeState = {
  isLoading: true,
  products: [],
};

export const homeReducer = produce(
  (draft: Draft<HomeState>, action: SetProductDataAction | SetProductLoadingStateAction) => {
    switch (action.type) {
      case SET_PRODUCT_LOADING_STATE:
        draft.isLoading = true;
        break;

      case SET_PRODUCT_DATA:
        draft.products = action.payload.response;
        draft.isLoading = false;
        break;

      default:
        break;
    }
  },
  initialState,
);

export type FetchProductDataAction = {
  type: typeof FETCH_PRODUCT_DATA;
};

export type SetProductDataAction = {
  type: typeof SET_PRODUCT_DATA;
  payload: ProductResponse;
};

export type SetProductLoadingStateAction = {
  type: typeof SET_PRODUCT_LOADING_STATE;
};

type ProductResponse = {
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
};

export type HomeState = {
  isLoading: boolean;
  products: Product[];
};
