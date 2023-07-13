import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../apis/user";

const initialState = {
    email: null,    // user email 값 저장.
    loading: false, // loading 중이라면 true, 아니면 false.
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
            state.email = action.payload.email;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("Time", new Date().getTime());
        })
        builder.addCase(loginRequest.rejected, (state, action) => {
            state.loading = false;
        })
    }
});

export const loginRequest = createAsyncThunk(
    "user/login",
    async (data) => {
        const { email, password } = data;
        const response = await login({ email, password });

        return {
            email,
            token: response.headers.authorization,
        };
    }
)
export const { setEmail } = userSlice.actions;
export default userSlice.reducer;