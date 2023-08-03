import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null, // error exit()
  isEnd: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      //action.payload.response는 최대 10개의 요소가 있을 것
      //10개보다 작다면 더이상 데이터를 불러오는게 의미 없음
      if (action.payload.response.length < 10) {
        state.isEnd = true;
      }
      state.loading = false;
      // prototype method라 부르는 메서드
      // .map, forEach, .reduce, .concat, .filter, .find, .findIndex, .sort
      // .slice, .splice, .push, .pop, .shift, .unshift
      // MDN 공부 필수
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
    return response.data;

    //successs, response, error
  }
);

export default productsSlice.reducer;

// 페이지 값에 따라서 리턴 : 페이지네이트(paginated) 된 데이터

// 관리자가 상품을 20개를 등록
// 1페이지 :  [ 20, 19, ..., 11] lastindex : cursor
// 2페이지: [11, ... , 2]

//

// 페이지네이트된 데이터는 언제나 변경이 자주 있어서는 안되거나 무한스크롤에는 완전히 적합하지 않다.
