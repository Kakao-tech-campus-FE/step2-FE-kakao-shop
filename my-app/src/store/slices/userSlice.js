import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/user";

const initialState = {
  email: null,
  loading: false,
  isLogined: false,
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.isLogined = action.payload.isLogined;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
  // 중간상 처리
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
      state.isLogined = false;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.loading = false;
      state.isLogined = true;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
      state.isLogined = false;
      state.email = null;
      state.error = action.payload.error.message;
    });
  },
});

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async (data) => {
    const { email, password } = data;

    if (typeof email !== "string") {
      throw new Error("이메일 형식이 올바르지 않습니다.");
    }

    if (typeof password !== "string") {
      throw new Error("비밀번호 형식이 올바르지 않습니다.");
    }

    const response = await login({ email, password });
    return response.data;
  }
);

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
