import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signin } from "../../services/api";

const initialState = {
  email: null,
  isLoggedIn: !!localStorage.getItem("token"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signinRequest.pending, (state, action) => {
      state.isLoggedIn = false;
    });
    builder.addCase(signinRequest.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      const tokenExpiration = new Date().getTime() + 5000;
      localStorage.setItem(
        "token",
        JSON.stringify({
          token: action.payload.token,
          expiration: tokenExpiration,
        })
      );
    });
    builder.addCase(signinRequest.rejected, (state, action) => {
      state.isLoggedIn = false;
    });
  },
});

export const checkTokenExpiration = () => {
  const tokenData = localStorage.getItem("token");
  if (tokenData) {
    const { expiration } = JSON.parse(tokenData);
    if (expiration && new Date().getTime() > expiration) {
      localStorage.removeItem("token");
    }
  }
};

export const signinRequest = createAsyncThunk(
  "user/signinRequest",
  async (data) => {
    const { email, password } = data;
    const response = await signin({ email, password });
    return { email, token: response.headers.authorization };
  }
);

export const { setUserEmail } = userSlice.actions;

export default userSlice.reducer;
