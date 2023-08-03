import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const initialState = {
    products: [],
    loading: false,
    error: null,
    isEnd: false,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        });
        //Promise.resolve()
        builder.addCase(getProducts.fulfilled, (state, action) => {
            if (action.payload.response.length < 10 ) {
                state.isEnd = true;
            }
            state.loading = false;
            state.products = _.uniqBy([...state.products, ...action.payload.response], 'id');
            state.error = null;  // success, response:[], error 세 개가 payload에 저장됨. 여기서 error만
        });
        //Promise.rejected()
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.error; // error exist: {message, status}
        })
    }
});

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async (page) => {
        const response = await fetchProducts (page);
        return response.data; //action.payload에 담김
        // success, response:[] ,error 세 개가 전달됨
    }
);

export default productSlice.reducer;