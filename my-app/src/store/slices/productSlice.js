import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null,
  isEnd: false,
  statusCode: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      if (action.payload.response.length < 10) {
        state.isEnd = true;
      }
      state.loading = false;
      state.products.concat(action.payload.response);
      state.products = _.uniqBy(
        [...state.products, ...action.payload.response],
        "id"
      );
      state.statusCode = "200";
      console.log("데이터 처리 완료", `${state.statusCode}`);
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      if (!!state.error) {
        state.statusCode = action.payload.error.status;
        console.log("데이터 실패, 에러 발생!", `${state.statusCode}`);
      }
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
