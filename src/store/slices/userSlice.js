// userSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../services/user";

const initialState = {
  email: null,
  loading: false,
  isAuthenticated: false,
  loginTime: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
      state.isAuthenticated = true;
      state.loginTime = new Date().getTime();
    },
    logout: (state) => {
      state.email = null;
      state.isAuthenticated = false;
    },
    setLoginTime: (state) => {
      state.loginTime = new Date().getTime();
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
    return { email, token };
  }
);

export const registerRequest = createAsyncThunk(
  "user/registerRequest",
  async (data) => {
    const { email, password, username } = data;
    const response = await register(data);
    const { token } = response.data;
    return { email, username, token };
  }
);

export const setEmail = (payload) => {
  return (dispatch) => {
    dispatch(userSlice.actions.setEmail(payload));
    localStorage.setItem("isAuthenticated", true);
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(userSlice.actions.logout());
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("loginTime");
  };
};

export const setLoginTime = () => {
  return (dispatch) => {
  dispatch(userSlice.actions.setLoginTime());
  localStorage.setItem("loginTime", new Date().getTime().toString());
  };
  };

export default userSlice.reducer;