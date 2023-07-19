import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null, // error exist: { message, status }
  isEnd: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  // reducer(없어도 됨) -> 상태변이에 대한 기본적인 리듀서
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    // Promise.resolve()
    builder.addCase(getProducts.fulfilled, (state, action) => {
      // action.payload.response는 최대 10개의 요소가 있을 것
      // 10개보다 작다면 더이상 데이터를 불러오는게 의미 없음
      if (action.payload.response.length < 10) {
        state.isEnd = true;
        state.loading = false;
      }
      // 동일한 제품이 존재할 경우가 있으므로, 추가 과정에서 중복제거
      state.products = _.uniqBy(
        [...state.products, ...action.payload.response],
        "id"
      );
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
    return response.data; // action.payload

    // success, response: [], error
  }
);

export default productsSlice.reducer;

// 페이지 값에 따라서 리턴: 페이지네이트(paginated)된 데이터

// 관리자가 상품을 20개 등록 ... 인데 하나 더 추가하면 21개됨
// 1페이지: [20, ... 11] lastIndex: cursor
// 2페이지: [1, ... 2] <- 중복됨
