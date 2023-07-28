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