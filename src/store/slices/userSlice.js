import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/login";

const initialState = {
  email: null,
  loading: false,
  error: null,
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    logout: (state, action) => {
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.logoutTimerId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.payload.email;
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
      state.email = null;
      state.error = action.payload ? action.payload.error.message : null;
    });
  },
});

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async (data) => {
    const { email, password } = data;
    const response = await login({ email, password });
    return {
      email: email,
      token: response.token,
    };
  }
);

export const { setEmail, logout } = userSlice.actions;

export default userSlice.reducer;
