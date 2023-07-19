import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { login } from "../../src/services"

const initialState = {
    email: null,
    loading: false,
    token: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginRequest.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(loginRequest.fulfilled, (state, action) => {
            state.loading = false;
            state.email = action.payload.email; // {success, response, error}
            localStorage.setItem("token", action.payload.token);
            state.token = action.payload.token;
        })
        builder.addCase(loginRequest.rejected, (state, action) => {
            state.loading = false;
        });
    },
})

export const loginRequest = createAsyncThunk(
    "user/loginRequest",
    async (data) => {
        const {email, password} = data;
        const response = await login({ email, password})
        return {
            email,
            token: response.headers.authorization,
        }
    } 
);

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;