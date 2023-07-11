import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/api/product";

const initialState = {
  products: [],
  loading: false,
  error: null, // error exist: {message, status}
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    // Promise.resolve()
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.response; // {success, response, error}
    });
    // Promise.reject()
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error; // error exist: {message, status}
    });
  }
  
})

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page) => {
    const response = await fetchProducts(page);
    // API 호출 결과의 형태
    // response.data = {success: , response: [], error: }
    return response.data; // action.payload에 담겨 전달된다.
  }
)

export default productsSlice.reducer;