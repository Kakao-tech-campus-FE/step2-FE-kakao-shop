import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../services/product";
import _ from "lodash";

const initialState = {
    products: [],
    loading: false,
    error: null, // error exist: { message, status }
    isEnd: false,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        }); //pending
        builder.addCase(getProducts.fulfilled, (state, action) => {
            if (action.payload.response.length < 10) {
                state.isEnd = true;
            }

            state.loading = false;
            state.products.concat(action.payload.response);
            // Prototype Methods
            state.products = _.uniqBy([
                ...state.products,
                ...action.payload.response,
            ]);
            const nextLength = state.products.length;
            state.error = action.payload.error;
        }); // resolve
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        }); // reject
    },
});

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (page) => {
        const response = await fetchProducts(page);
        return response.data; // action.payload
    }
);

export default productSlice.reducer;
