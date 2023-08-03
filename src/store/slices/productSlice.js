import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/api/product";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null, // error exist: {message, status}
  isEnd: false,
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
      // action.payload.response는 최대 10개의 요소가 있을 것
      // 10개보다 작다면 더이상 데이터를 불러오는게 의미 없음
      if (action.payload.response.length === 0){
        state.isEnd = true;
      }
      state.loading = false;
      
      // response와 기존의 products와의 중복 확인 - lodash이용
      // 백엔드에서 상품 추가 시 응답 순서가 밀려 중복으로 출력되는 상품이 존재할 때를 대비
      // // action.payload = {success, response, error}
      state.products = _.uniqBy([...state.products, ...action.payload.response], "id"); // id를 기준으로 unique한 값들만 남기기

      state.error = action.payload.error;
    });
    // Promise.reject()
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      console.log(action)
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