// src/store/slices/userSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../services/api";

const initialState = {
  email: null,
  loading: false,
  isAuthenticated: false,
  loginTime: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
      state.isAuthenticated = true;
      state.loginTime = new Date().getTime();
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("isAuthenticated", true);
    },
    logout: (state) => {
      state.email = null;
      state.isAuthenticated = false;
      localStorage.removeItem("email");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("loginTime");
    },
    setLoginTime: (state) => {
      state.loginTime = new Date().getTime();
      localStorage.setItem("loginTime", state.loginTime.toString());
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.payload.email;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(registerRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.payload.email;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(registerRequest.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async (data) => {
    const { email, password } = data;
    const response = await login(data);
    const { token } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    return { email, password };
  }
);

export const registerRequest = createAsyncThunk(
  "user/registerRequest",
  async (data) => {
    const { email, password, username } = data;
    const response = await register(data);
    const { token } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("username", username);
    return { email, password, username };
  }
);

export const { setEmail, logout, setLoginTime } = userSlice.actions;

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.removeItem("username");
};

export default userSlice.reducer;