import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts, getProductById } from "../../services/product";
import _ from "lodash";

const staticServerUrl = "https://user-app.krampoline.com/k9d43d0d3ffc5a/"

const initialState = {
    detail: null,
    loading: false,
    token:null,
    error: null, //error exist: { message, status}
    isEnd: false,
};

const detailSlice= createSlice({
    name: "detail",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getDetail.pending, (state, action)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getDetail.fulfilled, (state, action)=>{
           state.detail=action.payload.response; //success, error, response;
           state.loading=false;
           state.error=null;
        })
        .addCase(getDetail.rejected, (state, action)=>{
            state.loading=false;
            state.error=action.payload.error; //
    });
    }
});

export const getDetail = createAsyncThunk(
    staticServerUrl + "/api/detail/getDetail",
    async(id, thunkAPI)=>{
            const response = await getProductById(id);
            return response.data;
    }
           
    
);

export default detailSlice.reducer;