import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/api";

const initialState = {
  email: null,
  loading: false,
  error: null,
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    logout: (state, action) => {
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.logoutTimerId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.payload.email;
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // startLogoutTimer(state);
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
      state.email = null;
      state.error = action.payload ? action.payload.error.message : null;
    });
  },
});

// const startLogoutTimer = (state) => {
//   const timer = 6000;
//   if (state.logoutTimerId) {
//     clearTimeout(state.logoutTimerId);
//   }
//   state.logoutTimerId = setTimeout(() => {
//     console.log("일정 시간이 지나 로그아웃되었습니다.");
//     dispatch(logout());
//   }, timer);
// };

// state.email = null;
// state.token = null;
// state.isLoggedIn = false;
// state.logoutTimerId = null;

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async (data) => {
    const { email, password } = data;
    const response = await login({ email, password });

    if (typeof email !== "string") {
      throw new Error("이메일 형식이 올바르지 않습니다.");
    }
    if (typeof password !== "string") {
      throw new Error("비밀번호 형식이 올바르지 않습니다.");
    }

    return {
      email: email,
      token: response.token,
    };
  }
);

export const { setEmail, logout } = userSlice.actions;

export default userSlice.reducer;
