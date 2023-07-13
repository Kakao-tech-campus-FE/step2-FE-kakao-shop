import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const initialState = {
    email:null,
    loginTime: null,
    token: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{ 
        setEmail: (state, action) => {
            state.email = action.payload.email
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
          state.loading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.product = action.payload.response;
          state.error = action.payload.error;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload.error;
        });
      }
})

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (page = 0) => {
      const response = await fetchProducts(page);
      return response.data;
    }
  );


export const {setEmail} = userSlice.actions;
export default userSlice.reducer; 
