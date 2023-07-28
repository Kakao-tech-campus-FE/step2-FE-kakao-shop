import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login,register } from "../../services/user";

const initialState = {
    email: null,
    loginTime: null,
    token: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email;
        },
        setToken: (state, action) => {
            state.token = action.payload.token;
    },
    clearEmail: (state) => {
        state.email = null;
      },
    },
    extraReducers: (builder) => {
        builder.addCase(loginRequest.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(loginRequest.fulfilled, (state, action) => {
            state.email=action.payload.email;
            localStorage.setItem("token",action.payload.token)
            state.token = action.payload.token;
            state.loading = false;
        });
        builder.addCase(loginRequest.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export const loginRequest = createAsyncThunk(
    "user/login",
    async(data)=>{
        const {email, password}=data;
        const response=await login({email, password}); // action.payload

        return{
            email,
            token:response.headers.authorization
        }
        
    }
);




export const { setEmail } = userSlice.actions;
export default userSlice.reducer;
