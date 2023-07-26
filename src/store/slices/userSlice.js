import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonInstance } from "../../services/apis";

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
      const tokenExpiration = new Date().getTime() + 1000 * 60 * 60 * 24;
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
      const response = await commonInstance.post("/login", {
        email,
        password,
      });
      return { email, token: response.headers.authorization };
    } catch (error) {
      if (error.response.status === 401) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export default userSlice.reducer;
