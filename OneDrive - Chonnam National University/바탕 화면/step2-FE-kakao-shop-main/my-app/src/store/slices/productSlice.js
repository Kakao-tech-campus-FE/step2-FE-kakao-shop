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

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchProducts } from "../../services/product";

// // redux-thunk을 활용한 비동기 처리 !

// const initialState = {
//     products: [],
//     loading: false,
//     error: null, // error exist: { message, status }
// };

// const productsSlice = createSlice({
//     name: "products",
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(getProducts.pending, (state, action) => {
//             state.loading = true;
//         });
//         //Promise.resolve()
//         builder.addCase(getProducts.fulfilled, (state, action) => {
//             state.loading = false;
//             state.products = action.payload.response;
//             state.error = action.payload.error;
//         });
//         //Promise.reject()
//         builder.addCase(getProducts.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload.error; // error가 존재하는 경우에는 에러에 message, status가 존재한다.
//         });
//     },
// })

// export const getProducts = createAsyncThunk(
//     "products/getProducts",
//     async (page) => {
//         const response = await fetchProducts(page);
//         return response.data; // action.payload 에 담기는 값을 정해준 것
//         //response data 형태는 3개의 key 값이 들어감
//         //각각 success, response: [], error 이다.
//     }
// );

// export default productsSlice.reducer;

// //redux saga에 대한 내용 지움