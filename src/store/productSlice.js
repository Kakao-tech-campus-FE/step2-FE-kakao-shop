// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchProducts } from "../services/product";

// const initialState = {
//   products: [],
//   loading: false,
//   error: null, // error exist : { message, status }
//   staus: null,
// };

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(getProducts.pending, (state, action) => {
//       state.loading = true;
//     });
//     builder.addCase(getProducts.fulfilled, (state, action) => {
//       state.loading = false;
//       state.products = action.payload.response; // {success, response, error}
//       state.staus = "200";
//       console.log("Fetch products successful", `${state.staus}`);
//     });
//     builder.addCase(getProducts.rejected, (state, action) => {
//       state.loading = false;
//       state.products.concat(action.payload.response);
//       state.error = action.payload.error;
//       console.log("Fetch products failed:", `${state.staus}`);
//       state.staus = action.payload.error.status;
//       switch (state.status) {
//         case 400:
//           console.log("Bad request - Invalid parameters");
//           break;
//         case 404:
//           console.log("Products not found");
//           break;
//         case 500:
//           console.log("Internal server error");
//           break;
//         // Add more cases for other error statuses
//         default:
//           console.log("An error occurred while fetching products");
//           break;
//       }
//     });
//   },
// });
// export const getProducts = createAsyncThunk(
//   "products/getProducts",
//   async (page) => {
//     const response = await fetchProducts(page);
//     return response.data; //action.payload
//   }
// );
// export default productsSlice.reducer;
