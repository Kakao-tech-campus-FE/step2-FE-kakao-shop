import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";

// redux- thunk를 활용한 비동기 처리

const initialState = {
  products: [],
  loading: false,
  error: null, // error exit : { message, status }
};
// createAsync Thunk을 하려면 extra Reducer를 쓴다.

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    // 로딩시작
    builder.addCase(getProducts.pending, (state, action) => {
      // eslint-disable-line no-unused-vars
      state.loading = true;
    });
    // Promise.resolve()
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      // {success, response, error} 셋중 response
      state.products = action.payload.response;
      state.error = action.payload.error;
    });
    // Promise.reject()
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page) => {
    // page에 따라 product를 불러오게 된다.
    const response = await fetchProducts(page);
    return response.data; // action.payload 안에 담기는 값 정의
  }
);

export default productsSlice.reducer;
