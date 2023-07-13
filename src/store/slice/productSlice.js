import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchProductsByPage} from "../../services/product";
import _ from "lodash";

const initialState = {
    products: [],
    loading: false,
    error: null,
    isEnd: false
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false;
            action.payload.response.forEach((product) => {
                product.image = `${process.env.REACT_APP_API_URL}${product.image}`
            })
            const prevLength = state.products.length;
            state.products = _.uniqBy([...state.products, ...action.payload.response], 'id');
            const currentLength = state.products.length;
            console.log("slice isEnd", state.isEnd)
            if (prevLength === currentLength) {
                state.isEnd = true;
            }
            state.error = action.payload.error;
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        })
    },
    reducers: {
        initiateProduct: (state, action) => {
            state.products = [];
            state.loading = false;
            state.error = null;
            state.isEnd = false;
        }
    }
})
export const getProduct = createAsyncThunk(
    'product/getProduct',
    async (page) => {
        const response = await fetchProductsByPage(page);
        return response.data;
    }
)

export default productSlice.reducer;