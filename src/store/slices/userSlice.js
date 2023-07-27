import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../apis/user";

//// 로그인 만료
// DURATION : 만료 기간 (일 단위)
// isExpired : 만료 기간이 지나면 localStorage에서 삭제
const DURATION = 1;
const isExpired = Date.now() > JSON.parse(localStorage.getItem("user"))?.date;
if (isExpired) {
  localStorage.removeItem("user");
}

const initialState = {
  email: JSON.parse(localStorage.getItem("user"))?.email || null,
  token: JSON.parse(localStorage.getItem("user"))?.token || null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem("user");
        state.email = null;
        state.token = null;
      } else {
        state.email = action.payload.email;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.error = false;
      // 로컬스토리지에 이메일, 토큰, 만료기간 함께 저장
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: action.payload.email,
          token: action.payload.token,
          date: Date.now() + DURATION * 1440 * 60 * 1000,
        })
      );
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
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

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
