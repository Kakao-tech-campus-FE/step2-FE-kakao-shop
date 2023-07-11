import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../apis/product";

const initialState = {
    products: [],
    loading: false,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    // thunk을 쓸 때는 extra 사용
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        }
        ).addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        }
        ).addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
        }
        )
    }
});

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (page) => {
        const response = await fetchProducts(page);
        return response.data;
    }
)

export default productsSlice.reducer;