import { fetchProducts } from '@api/productApi';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: true,
  error: null,
  isEnd: false,
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
    builder.addCase(getProducts.fulfilled, (state, action) => {
      // Promise.resolve() 되었을때
      const newState = state;

      if (action.payload.response.length < 9) {
        newState.isEnd = true;
      }
      newState.loading = false;
      newState.products = action.payload.response;
      newState.error = action.payload.error;
    });
    builder.addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
      // Promise.reject() 되었을 떄
      const newState = state;
      newState.loading = false;
      newState.error = action.payload.error;
    });
  },
});

export { getProducts };
export default productsSlice.reducer;
