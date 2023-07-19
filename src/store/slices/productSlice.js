import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../src/services/product";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        })
        // Promise.resolve()
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.response; // {success, response, error}
            state.error = action.payload.error
        })
        // Promise.reject()
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error; //error exist: {message, status}
        });
    },
});

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async(page) => {
        const respone = await fetchProducts(page);
        return respone.data; // action.payload
    }
)

export default productsSlice.reducer;