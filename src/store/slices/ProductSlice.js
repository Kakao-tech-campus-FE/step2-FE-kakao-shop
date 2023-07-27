import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const initialState = {
    products: [],
    loading: false,
    error: null, //error exist: { message, status}
    isEnd: false,
};

const productsSlice =createSlice({
    name: "products",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending, (state, action)=>{
            state.loading=true;
        });
        //promise.resolve()
        builder.addCase(getProducts.fulfilled, (state, action)=>{
            //action.payload.response는 최대 10개
            //10개 이하면 불러올 필요 없음

            if(action.payload.response.length<10){
                state.isEnd = true;
            }

            state.loading=false;
            //state.products.concat(action.payload.response);
            
            state.products=_.uniqBy([...state.products,...action.payload.response], 'id'); //{success, response, error}
            state.error=action.payload.error
        });
        //promise.resolve()
        builder.addCase(getProducts.rejected, (state, action)=>{
            state.loading=false;
            state.error=action.payload.error; //
    });
},
});

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async(page)=>{
        const response =await fetchProducts(page);
        return response.data; // action.payload

        //success, response: [], error
    }
);

export default productsSlice.reducer;