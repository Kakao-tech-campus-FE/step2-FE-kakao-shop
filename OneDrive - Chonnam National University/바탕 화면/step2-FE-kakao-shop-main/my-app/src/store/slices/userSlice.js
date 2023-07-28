import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/api";

const initialState = {
  email: null,
  loading: false,
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
      state.isLogin = true;
      localStorage.setItem("email", action.payload.email);
    },
    logOut: (state) => {
      state.email = null;
      state.isLogin = false;
      localStorage.removeItem("email");
      localStorage.removeItem("isLogin");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogin = true;
      state.email = action.payload.email;
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("isLogin", true);
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(loginRequest.rejected, (state) => {
      state.loading = false;
    });
  },
});
    
export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async (data) => {
    const { email, password } = data;
    const response = await login({ email, password }); // post 요청: 데이터 생성, 데이터 조회 보안이 필요한 경우
    return {
      email: email,
      token: response.headers.authorization,
    };
  }
);

export const { setEmail, logOut } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;