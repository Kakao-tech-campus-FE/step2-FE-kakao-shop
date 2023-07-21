import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../services/product';
import _ from 'lodash';

const initialState = {
  products: [],
  loading: false,
  error: null, // error exist: { message, status }
  isEnd: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      if (action.payload.response.length < 10) {
        state.isEnd = true;
      }
      state.loading = false;
      state.products.concat(action.payload.response);
      state.products = _.uniqBy([...state.products, ...action.payload.response], 'id'); // {sucess, response, error}
      const nextLength = state.products.length;

      state.error = action.payload.error;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export const getProduct = createAsyncThunk('products/getProduct', async (page) => {
  const response = await fetchProducts(page);
  return response.data; // action.payload에 들어감
});

export default productsSlice.reducer;
