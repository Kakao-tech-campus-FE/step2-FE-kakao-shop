import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../apis/api";

const initialState = {
    email: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email;
        },
    },
});

export const loginRequest = createAsyncThunk(
    "user/login",
    async (data) => {
        const { email, password } = data;
        const response = await login({ email, password });
        return response.data;
    }
)
export const { setEmail } = userSlice.actions;
export default userSlice.reducer