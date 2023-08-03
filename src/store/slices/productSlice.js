import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import { PRODUCT_NUM_PER_PAGE } from "../../utils/constant";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null, // error가 존재하는 경우: error: { message, status }
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
      if (action.payload.response.length < PRODUCT_NUM_PER_PAGE) {
        state.isEnd = true;
      }
      state.loading = false;
      state.products = _.uniqBy(
        [...state.products, ...action.payload.response],
        "id"
      );
      state.error = action.payload.error;
    });
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
    return response.data; // action.payload { success, response, error }
  }
);

export default productsSlice.reducer;

// ⭐️ 백엔드에서 id를 주는 순서
// - [20, 19, 18, ....]: 큰 것 -> 작은 것(가장 최신의 data부터 넘겨줌)
// - 페이지네이션은 그래서 무한스크롤보다 게시판 구조일 때 사용
// - 무한스크롤은 커서(index)로 구현 -> fetching data의 구분을 index로 한다

// ⭐️ prototype array method: map, forEach, reduce, concat, filter, find, findIndex, sort
//  slice, splice, push, pop, shift, unshift
