import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState  = {
  products: [],
  loading: false,
  error: null, // error ex
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = true;
    });
    // Promise.resolve()
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.response;
      state.error = action.payload.error;
    });
    // Promise.reject()
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = true;
    });
  }
})

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page) => {
    const
  }
);

export default productsSlice.reducer;