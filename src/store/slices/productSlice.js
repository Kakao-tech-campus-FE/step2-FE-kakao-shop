import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";

const initialState = {
    products: [],
    loading: false,
    error: null, // error exist: { message, status }
    isEnd: false,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        });
        // Promise.resolve()
        builder.addCase(getProducts.fulfilled, (state, action) => {
            if(action.payload.response.length < 10){
                state.isEnd = true;
            }
            state.loading = false;
            state.products = action.payload.response;
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
    "products/getProducts", // 구분자
    async (page) => { // 비동기 콜백함수
        const response = await fetchProducts(page);
        return response.data; // action.payload
    }
);

export default productsSlice.reducer;