import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const initialState = {
  product: [],
  loading: false,
  error: null,
  isEnd: false
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      const precLength = state.product.length;
      if (action.payload.response.length < 10) {
        state.isEnd = true;
      }
      state.loading = false;
      state.product = _.uniqBy([...state.product, ...action.payload.response], 'id');
      const nextLength = state.product.length;
      state.error = action.payload.error;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  }
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page = 0) => {
    const response = await fetchProducts(page);
    return response.data;
  }
);

export default productsSlice.reducer;