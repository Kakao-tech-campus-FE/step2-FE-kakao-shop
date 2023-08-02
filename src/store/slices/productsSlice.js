/* eslint-disable */

import _ from "lodash";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../api/product";

const initialState = {
  products: [],
  loading: false,
  error: null,
  isEnd: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        if (action.payload.response.length < 10) {
          state.isEnd = true;
        }
        state.loading = false;
        state.products = _.uniqBy(
          [...state.products, ...action.payload.response],
          "id"
        );
        state.error = action.payload.error;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page) => {
    const response = await fetchProducts(page);
    return response.data;
  }
);

export default productsSlice.reducer;
