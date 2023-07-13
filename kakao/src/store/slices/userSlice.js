import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/user";

const initialState = {
  email: null,
  loading: false,
  token: null,
};

const userSlice = createSlice({
  name: "user", //구분자
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },

    clearEmail: (state) => {
      state.email = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.payload.email;
      console.log(action); //
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async (data) => {
    const { email, password } = data;
    const response = await login({ email, password });
    console.log(response);
    return {
      email: email,
      token: response.headers.authorization,
    };
  }
);

export const { setEmail, clearEmail } = userSlice.actions;
export default userSlice.reducer;
