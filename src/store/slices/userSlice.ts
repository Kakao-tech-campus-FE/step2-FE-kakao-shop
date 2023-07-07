import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginData } from '../../types/formData';
import { requestUserLogin } from '../../apis/axios';
import { setItemWithExpireDate } from '../../utils/localStorage';
import { LOCALSTORAGE_KEY_TOKEN, LOCALSTORAGE_KEY_USERINFO, TOKEN_EXPIRE_DATE } from '../../utils/common';

interface UserSliceState {
  isLogin: boolean;
  isLoading: boolean;
  email: null | string;
  errorMessage: null | string;
}

const initialState: UserSliceState = {
  isLoading: false,
  isLogin: false,
  email: null,
  errorMessage: null,
};

export const loginRequest = createAsyncThunk(
  'user/loginRequest',
  async ({ email, password }: LoginData) => {
    const response = await requestUserLogin({ email, password });

    if (response.status === 200) {
      return {
        data: response.data,
        token: response.headers.authorization,
      };
    }

    return response.data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload.isLogin;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isLogin = false;
      state.email = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.isLoading = false;

      if (action.payload.success === false) {
        state.isLogin = false;
        state.errorMessage = `로그인에 실패했습니다: ${action.payload.error.message.toString()}`;
      } else {
        const { email } = action.meta.arg;

        state.isLogin = true;
        state.email = email;
        state.errorMessage = null;

        setItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN, action.payload.token, TOKEN_EXPIRE_DATE);
        localStorage.setItem(LOCALSTORAGE_KEY_USERINFO, JSON.stringify({ email }));
      }
    });
    builder.addCase(loginRequest.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = '로그인 요청이 실패했습니다.';
    });
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
