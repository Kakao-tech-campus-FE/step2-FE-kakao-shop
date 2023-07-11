import {createSlice, createAsyncThunk}  from '@reduxjs/toolkit';
import {fetchProducts} from '../../services/product';

const initialState = {
  products: [],
  loading: false,
  error: null, // error exist: { message, status }
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload; // {sucess, response, error}
      state.error = action.payload.error;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export const getProduct = createAsyncThunk(
  'products/getProduct',
  async (page) => {
    const response = await fetchProducts(page);
    return response.data; // action.payload에 들어감
  }
);

export default productsSlice.reducer;