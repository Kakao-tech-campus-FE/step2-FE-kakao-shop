import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../apis/product";
import _ from "lodash";

const initialState = {
    products: [],
    loading: false,
    error: null, // error exist: { message, status }
    isEnd: false
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            // 가져오는 데이터가 9개보다 작다면 끝.
            if(action.payload.response.length < 9) {
                state.isEnd = true;
            }

            state.loading = false;
            state.products.concat(action.payload.response);
            state.products = _.uniqBy([...state.products, ...action.payload.response], 'id');
            state.error = action.payload.error;
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        })
    }
})

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (page) => {
        const response = await fetchProducts(page);
        return response.data;
    }
);

export default productsSlice.reducer;