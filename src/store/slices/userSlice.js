import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/api";

const initialState = {
  email: null,
  loading: false, // 요청을 보냈을 때는 true, 아닌 경우: 요청이 없었거나, 실패했거나 성공했을 때 false
  error: null, // 에러가 있는 경우 error.message 담는다.
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
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
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
      state.email = null;
      state.error = action.payload ? action.payload.error.message : null;
    });
  },
});

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
      token: response.headers.authorization,
    };
  }
);

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
