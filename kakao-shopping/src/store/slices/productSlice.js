import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";

const initialState = {
  products: [],
  loading: false,
  error: null, // error exist: {message, status}
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.response; // {sucess, response, error}
      state.error = action.payload.error;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error; 
    });
}});

export const getProduct = createAsyncThunk(
  "products/getProducts",
  async (page) => {
    const response = awiat fetchProducts(page);
    return response.data; // action.payload에 담기는 값
  }
);

export default productsSlice.reducer;
