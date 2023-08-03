// slice 다 만들고 나면 index에서 선언을 해줘야함 import!!

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null, // 에러가 존재하는 경우 { message, status}가 존재
  isEnd: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page) => {
    const response = await fetchProducts(page);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,

  // createAsyncThunk을 이용해서 만들때는 extraReducers로 콜백함수를 넣을수 있는데 파라미터는 빌더
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    // Promise.resolve()되었을때
    builder.addCase(getProducts.fulfilled, (state, action) => {
      if (action.payload.response.length < 10) {
        state.isEnd = true;
      }
      state.loading = false;
      state.products = _.uniqBy(
        [...state.products, ...action.payload.response],
        "id"
      ); //action.payload -> {success, response, error} 3개가 들어가 있음
      // const nextLength = state.products.length;
      state.error = action.payload.error;
    });
    // Promise.reject()되었을때
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export default productsSlice.reducer;
