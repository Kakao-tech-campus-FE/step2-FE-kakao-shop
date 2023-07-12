import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../apis/product";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null,
  isEnd: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  // thunk을 쓸 때는 extra 사용
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        if (action.payload.response.length < 9) {
          state.isEnd = true;
        }

        state.products = _.uniqBy(
          [...state.products, ...action.payload.response],
          "id"
        );
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page) => {
    // 비동기 콜백함수

    const response = await fetchProducts(page);
    return response.data; // action.payload에 들어간다
  }
);

export default productsSlice.reducer;
