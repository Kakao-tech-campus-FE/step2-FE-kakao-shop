import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../services/apis";

const initialState = {
  email: null,
  isLoggedIn: !!localStorage.getItem("token"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
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

export const signinRequest = createAsyncThunk(
  "user/signinRequest",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await instance.post("/login", {
        email,
        password,
      });
      return { email, token: response.headers.authorization };
    } catch (error) {
      if (error.response.data.error.status === 401) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const checkTokenExpiration = () => {
  const tokenData = localStorage.getItem("token");
  if (tokenData) {
    const { expiration } = JSON.parse(tokenData);
    if (expiration && new Date().getTime() > expiration) {
      localStorage.removeItem("token");
    }
  }
};

export default userSlice.reducer;
