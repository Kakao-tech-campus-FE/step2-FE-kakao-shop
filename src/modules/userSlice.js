import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../services/user";
import { setCookie } from "../constants/cookie";

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
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginRequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload.email;
        setCookie("accessToken", action.payload.token, 1);
        state.token = action.payload.token;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const loginRequest = createAsyncThunk(
  'user/loginRequest',
  async (data) => {
    const { email, password } = data;
    const response = await login({ email, password });
    return {
      email,
      token: response.headers.getAuthorization,
    };
  }
);

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
