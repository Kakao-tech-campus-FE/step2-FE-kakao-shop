import { fetchProducts } from '@api/product';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const getProducts = createAsyncThunk('products/getProducts', async (page: number) => {
  const response = await fetchProducts(page);
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      const newState = state;
      newState.loading = true;
    });
  },
});

export { getProducts };
export default productsSlice.reducer;
