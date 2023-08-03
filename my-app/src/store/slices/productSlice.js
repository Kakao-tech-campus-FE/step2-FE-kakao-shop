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
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.statusCode = action.payload.error.status;

      switch (state.statusCode) {
        case "400":
          console.log("Bad Request");
          break;
        case "404":
          console.log("Not Found");
          break;
        case "405":
          console.log("Method not allowed");
          break;
        case "415":
          console.log("서버가 요청에 대한 승인을 거부한 오류");
          break;
        case "500":
          console.log("서버 내부 오류");
          break;
        case "505":
          console.log("HTTP Version Not Supported");
          break;
        default:
          console.log("데이터 처리 오류가 발생했습니다.", state.statusCode);
          break;
      }
    });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page) => {
    const response = await fetchProducts(page);
    return response.data;
  }
);
export default productsSlice.reducer;
