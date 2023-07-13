import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/user";

const initialState = {
  email: null,
  loggedInAt: null,
  loading: false,
  token: null,
};

const userSlice = createSlice({
  // name에 들어가는 값 "user"가 곧 unique한 구분자
  name: "user",
  initialState,
  reducers: {
    // LoginForm이나 Register에서 dispatch(setEmail()) 하면 아래 코드가 실행됨
    // payload는 dispatch(setEmail(payload)) 안에 들어가는 payload 값임
    setEmail: (state, action) => {
      state.email = action.payload.email;
      state.loggedInAt = action.payload.loggedInAt;
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
      localStorage.setItem("email", "sample email");
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
    return {
      email,
      token: response.headers.authorization,
    };
  }
);

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
