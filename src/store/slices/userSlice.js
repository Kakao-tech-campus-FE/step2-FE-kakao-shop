import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/user"
import Home from "../../pages/HomePage";

const initialState = {
  email: null,
  loading: false,  // 요청을 보냈을 때는 true, 아닌 경우: 요청이 없었거나, 실패했거나, 성공했을 때 false
  // expirationTime : null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },

    // setUser: (state, action) => {
    //   state.email = action.payload.email;
    //   state.expirationTime = action.payload.expirationTime;
    //   state.isLoggedIn = true;
    //   // window.location.href = "/";
    // },
    clearUser: (state) => {
      state.email = null;
      state.expirationTime = null;
      state.isLoggedIn = false;
    },

  },
    extraReducers: (builder) => {
      builder.addCase(loginRequest.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(loginRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload.email;
        localStorage.setItem('token', action.payload.token);
        state.token = action.payload.token;
      });
      builder.addCase(loginRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error.message;
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
      token: response.headers.getAuthorization(),
    };
  }
);

export const {  setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;