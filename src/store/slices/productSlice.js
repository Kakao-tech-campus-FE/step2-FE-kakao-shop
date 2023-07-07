import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
};

const productsSlice= createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, action) => {
      state.products = action.payload.products;
      state.loading = false;
    },
    getProductsFailed: (state) => {
      state.loading = false;
    }
  },
});

export const {getProducts, getProductSuccess, getProductsFailed} =productsSlice.actions;
export default productsSlice.reducer;