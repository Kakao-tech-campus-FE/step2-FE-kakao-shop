import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/users";
const initialState = {
  email: null,
  isLoggedIn: false,
  expirationTime: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.expirationTime = action.payload.expirationTime;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.email = null;
      state.expirationTime = null;
      state.isLoggedIn = false;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async (data) => {
    const { email, password } = data;
    const response = await login({ email, password });
    return {
      email,
      token: response.headers.authorization,
    };
  }
);

export const { setUser, clearUser, setToken } = userSlice.actions;
export default userSlice.reducer;
