import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { checkuser, login, register } from "../../Servicies/user";

const initialState = {
  username: null,
  email: null,
  loading: false,
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
      state.email = action.payload?.email; // response로 담긴 데이터들이 payload로 담김..!
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error.message;
    });
  },
});

export const loginRequest = createAsyncThunk("user/loginRequest", async (data) => {
  const { email, password } = data;
  const response = await login({ email, password }); // post: 데이터 생성, 데이터 조회.
  return response;
});

export const registerRequest = createAsyncThunk("user/registerRequest", async (data) => {
  const { username, email, password } = data;
  const response = await register({ username, email, password }); // post: 데이터 생성, 데이터 조회.
  return response.data;
});

export const checkUnique = createAsyncThunk("user/checkUnique", async (data) => {
  const { email } = data;
  const response = await checkuser({ email }); // post: 데이터 생성, 데이터 조회.
  return response.data;
});

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
