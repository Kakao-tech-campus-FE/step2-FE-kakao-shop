import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../apis/auth";
import { getCookie } from "../../utils/cookie";

const user = !!getCookie("accessToken");
const initialState = {
  user,
};

export const userSlice = createSlice({
  // name의 값은 store 전체에서 유일해야 한다.
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.fulfilled, (state) => {
      state.user = true;
    });
  },
});

export const loginRequest = createAsyncThunk("user/login", async (data) => {
  const { email, password } = data;
  const response = await login({ email, password });

  return {
    accessToken: response.headers.authorization,
  };
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
