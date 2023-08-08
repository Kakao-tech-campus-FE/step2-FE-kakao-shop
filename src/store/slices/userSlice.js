import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/user.js";

const storedToken = localStorage.getItem("token");

const initialState = {
  email: null,
  loading: false,
  token: storedToken ? storedToken : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
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
      state.token = action.payload.token; //임시
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
    const response = await login({ email, password }); // post: 데이터 생성, 데이터를 조회 보안이 필요한 경우
    return {
      email,
      token: response.headers.authorization,
    };
  }
);

export const { setEmail, setToken } = userSlice.actions;

export default userSlice.reducer;
