import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null, // {message, status}
  isEnd: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      // 10개보다 작다면 더이상 데이터를 불러오지 않도록 제어
      if (action.payload.response.length < 10) {
        state.isEnd = true;
      }
      state.loading = false;
      state.products.concat(action.payload.response);
      // 중복을 빼내는 과정 => [20, 19, ..., 11], [10, 9, ..., 1]
      state.products = _.uniqBy(
        [...state.products, ...action.payload.response],
        "id"
      );
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      console.log("에러 발생: ", state.error);
    });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts", // key 값
  async (page) => {
    // 비동기 callback 함수
    const response = await fetchProducts(page);
    return response.data; // action.payload -> success, response: [...], error
  }
);
export default productsSlice.reducer;
