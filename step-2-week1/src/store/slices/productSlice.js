import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import { act } from "react-dom/test-utils";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null, // error exist : { message, status}
  isEnd: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    // Promise.resolve()
    builder.addCase(getProducts.fulfilled, (state, action) => {
      
      // action.payload.response는 최대 10개의 요소 있을 것
      // 10개보다 작다면 더이상 데이터를 불러오는게 의미 없음
      if (action.payload.response.length < 10) {
        state.isEnd = true;
      }

      state.loading = false;
      state.products.concat(action.payload.response);
      state.products = _.uniqBy([...state.products, ...action.payload.response], 'id'); // { success, response, error}
      const nextLength = state.products.length;
      state.error = action.payload.error;
    });
    // Promise.reject()
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error; 
    })
  }
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

// 페이지 값에 따라 리턴 : 페이지네이트된 데이터
