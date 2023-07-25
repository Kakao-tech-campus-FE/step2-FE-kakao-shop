import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../services/user';

const initialState = {
  user: false,
  email: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.payload.email;
      state.user = true;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const loginRequest = createAsyncThunk(
  'user/loginRequest',
  async (data) => {
    const { email, password } = data;

    // 여기서 이메일, 비번 에러 캐칭
    if (typeof email !== 'string' || !email.includes('@')) {
      throw new Error('Please provide a valid email address');
    }

    if (typeof password !== 'string' || password.length < 6) {
      throw new Error('Please provide a valid password');
    }

    const response = await login({ email, password }); // post request
    return response.data;
  }
);

export const { setEmail, setUser } = userSlice.actions;

export default userSlice.reducer;
