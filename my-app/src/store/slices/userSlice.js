import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/user";

const initialState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state, action) => { // eslint-disable-line no-unused-vars
      state.isLoading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.isLoading = false;
      throw Error(action.error.message);
    });
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

export const { setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;