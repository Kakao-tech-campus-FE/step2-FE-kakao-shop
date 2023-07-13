import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../apis/product";

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
            // 가져오는 데이터가 10개보다 작다면 끝.
            if(action.payload.response.length < 10) {
                state.isEnd = true;
            }

            state.loading = false;
            state.products = action.payload.response;
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