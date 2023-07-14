import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../service/api";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async (data) => {
    const { email, password } = data;
    const response = await login({ email, password }) // post: 데이터 생성, 데이터를 조회 보안이 필요한 경우
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
