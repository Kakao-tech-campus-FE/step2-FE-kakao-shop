import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductList } from '../services/product';

const initialState = {
  products: [],
  loading: false,
  error: null,
  isEnd: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        if (action.payload.response.length < 10) {
          state.isEnd = true;
        }
        state.loading = false;
        state.products = [...state.products, ...action.payload.response];
        state.error = action.payload.error;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (page) => {
    const response = await fetchProductList(page);
    return response.data;
  }
);

export default productSlice.reducer;
