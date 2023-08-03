import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../utils/cookie";
import authInstance from "../../apis/auth";

const isLoggedIn = Boolean(getCookie("accessToken"));
const initialState = {
  isLoggedIn,
};

export const userSlice = createSlice({
  // name의 값은 store 전체에서 유일해야 한다.
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.fulfilled, (state) => {
      state.isLoggedIn = true;
    });
  },
});

export const loginRequest = createAsyncThunk("user/login", async (data) => {
  const { email, password } = data;
  const response = await authInstance.login({ email, password });

  return {
    accessToken: response.headers.authorization,
  };
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
