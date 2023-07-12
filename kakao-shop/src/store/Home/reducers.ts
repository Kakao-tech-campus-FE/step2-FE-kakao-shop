import { produce, Draft } from 'immer';

export const FETCH_PRODUCT_DATA = 'home/FETCH_PRODUCT_DATA';
export const SET_PRODUCT_DATA = 'home/SET_PRODUCT_DATA';

export const productDataRequest = (): FetchProductDataAction => ({
  type: FETCH_PRODUCT_DATA,
});

export const setProductData = (payload: ProductResponse): SetProductDataAction => ({
  type: SET_PRODUCT_DATA,
  payload,
});

export const initialState: HomeState = {
  products: [],
};

export const homeReducer = produce((draft: Draft<HomeState>, action: SetProductDataAction) => {
  switch (action.type) {
    case SET_PRODUCT_DATA:
      draft.products = action.payload.response;
      break;

    default:
      break;
  }
}, initialState);

export type FetchProductDataAction = {
  type: typeof FETCH_PRODUCT_DATA;
};

export type SetProductDataAction = {
  type: typeof SET_PRODUCT_DATA;
  payload: ProductResponse;
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
  products: Product[];
};
