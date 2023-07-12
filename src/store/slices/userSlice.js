import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/user";

const initialState = {
  email: null,
  loading: false, //요청 보낼 때는 true, 아닌 경우: 요청 없거나 실패, 성공했을 때 false
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
