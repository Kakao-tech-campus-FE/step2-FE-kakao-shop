import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { login } from '../../components/services/user';

const initialState = {
  email:  null,
  loginTime: null,
  isLoggedIn : null,
  loading: false,
  token: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail : (state, action) => {
      state.email = action.payload.email;
      localStorage.setItem('email', state.email);
      localStorage.setItem('token', action.payload.token);
      state.loginTime = new Date().getTime();
    },
    setToken : (state, action) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.email = null;
      state.isLoggedIn = false;
      state.loginTime = null;
    },
    loginTime: (state) => {
      state.loginTime = new Date().getTime();
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
      state.isLoggedIn = true;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async (data) => {
    const {email, password} = data;
    const response = await login({email, password});
    return {
      email,
      token: response.headers.authorization
    }
  }
);

export const { setEmail, logout, loginTime } = userSlice.actions;

export default userSlice.reducer;