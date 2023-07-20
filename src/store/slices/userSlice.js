import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../services/user";
import { getCookie, setCookie } from "../cookies";

const token = getCookie("token");
const initialState = {
  email: null,
  loading: false,
  error: null,
  loginCheck: !!token,
  logined: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
    setLogin: (state, action) => {
      //로그인 후 메인 페이지 로딩 시 로그인 버튼 -> 로그아웃 버튼으로 리렌더링 없이 하기 위해 만들었는데 로그아웃에 반영이 안됨..
      state.logined = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      //로그인 성공 시 상태에 이메일 추가
      state.loading = false;
      state.email = action.meta.arg.email;
      state.error = null;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error.message;
      alert(`${state.error}`);
    });
    builder.addCase(registerRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.meta.arg.email;
      state.error = null;
    });
    builder.addCase(registerRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error.message;
      alert(`${state.error}`);
    });
  },
});

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async (data, { rejectWithValue }) => {
    try {
      const { email, password } = data;
      const response = await login({ email, password });
      alert("login success");
      if (response.data.success) {
        console.log(response.headers.authorization);
        setCookie("token", response.headers.authorization, 1); //token 쿠키 저장
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerRequest = createAsyncThunk(
  "user/registerRequest",
  async (data, { rejectWithValue }) => {
    try {
      const { username, email, password } = data;
      const response = await register({ username, email, password });
      alert("sign up success");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const { setEmail, setError, setLogin } = userSlice.actions;
export default userSlice.reducer;
