import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state) => {
            state.loading = true;
        },
        getProductsSuccess: (state, action) => {
            state.products = action.payload.products;
            state.loading = false;
        },
        getProductsFailed: (state) => {
            state.loading = false;
        }
    }
})

export const { getProducts, getProductsFailed, getProductsSuccess } = productSlice.actions;

export default productSlice.reducer;