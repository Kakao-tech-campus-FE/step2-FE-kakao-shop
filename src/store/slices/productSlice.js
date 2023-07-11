import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../apis/product";

const initialState = {
  products: [],
  loading: false,
  error: null, // error exist: {message, status}
};

const productSlice = createSlice({
  name: "products",
  initialState,
  // 썽크를 사용할 때
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    // Promise.resolve()
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.response;
      state.error = action.payload.error;
    });
    // Promise.reject()
    builder.addCase(getProducts.rejected, (state, action) => {
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

    // action.payload
    // success, response : [], error
  }
);

export default productSlice.reducer;
