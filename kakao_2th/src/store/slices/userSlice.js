import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services"

const initialState = {
    email: null,
    loading: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email;
        },
        setToken: (state, action) => {
            state.token = action.payload.token;

        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginRequest.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(loginRequest.fulfilled, (state, action) => {
            state.loading = false;
            state.email = action.payload.email;
        });
        builder.addCase(loginRequest.rejected, (state, action) => {
            state.loading = true;
        });
    }
})

export const loginRequest = createAsyncThunk(
    "user/loginRequest",
    async (data) => {
        const { email, password } = data;
        const response = await login({ email, password });
        return response.data;
    }
)


export const { setEmail } = userSlice.actions;

export default userSlice.reducer