import {createSlice} from "@reduxjs/toolkit"

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

export const {setEmail} = userSlice.actions;
export default userSlice.reducer; 
