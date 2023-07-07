import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../services/api";
import { getCookie, setCookie } from "../cookies";

const token = getCookie("token");
const initialState = {
  email: null,
  loading: false,
  error: null,
  loginCheck: !!token,
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
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.meta.arg.email;
      console.log(action, state);
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
      console.log(action);
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
      if (response.data.success)
        setCookie("token", response.headers.authorization, 1); //token 쿠키 저장
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
      const { username, email, password, passwordConfirm } = data;
      if (password !== passwordConfirm) {
        //throw new Error(rejectWithValue());
      }
      const response = await register({ username, email, password });
      alert("sign up success");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const { setEmail, setError } = userSlice.actions;
export default userSlice.reducer;
