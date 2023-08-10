import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { LoginData } from '../../types/formData';
import { requestUserLogin } from '../../apis/user';
import { setItemWithExpireDate } from '../../utils/localStorage';
import { LOCALSTORAGE_KEY_TOKEN, LOCALSTORAGE_KEY_USERINFO, TOKEN_EXPIRE_DATE } from '../../utils/common';
import { LOGIN_RESPONSE_ERROR_MSG_400, LOGIN_RESPONSE_ERROR_MSG_401, LOGIN_RESPONSE_ERROR_MSG_500 } from '../../utils/errorMsg';

interface UserSliceState {
  isLogin: boolean;
  isLoading: boolean;
  email: string | null;
  errorMessage: string | null;
}

const initialState: UserSliceState = {
  isLoading: false,
  isLogin: false,
  email: null,
  errorMessage: null,
};

export const loginRequest = createAsyncThunk(
  'user/loginRequest',
  async ({ email, password }: LoginData, { rejectWithValue }) => {
    try {
      const response = await requestUserLogin({ email, password });

      if (response.data.success === true) {
        return {
          data: response.data,
          token: response.headers.authorization,
        };
      }

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 400: {
            return rejectWithValue(LOGIN_RESPONSE_ERROR_MSG_400);
          }

          case 401: {
            return rejectWithValue(LOGIN_RESPONSE_ERROR_MSG_401);
          }

          case 500: {
            return rejectWithValue(LOGIN_RESPONSE_ERROR_MSG_500);
          }

          default: {
            return rejectWithValue(error.response?.data.error.message);
          }
        }
      }

      return Promise.reject(error);
    }
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

      localStorage.removeItem(LOCALSTORAGE_KEY_TOKEN);
      localStorage.removeItem(LOCALSTORAGE_KEY_USERINFO);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.isLoading = false;

      const { email } = action.meta.arg;
      const { token } = action.payload;

      if (token) {
        state.isLogin = true;
        state.email = email;
        state.errorMessage = null;

        setItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN, token, TOKEN_EXPIRE_DATE);
        localStorage.setItem(LOCALSTORAGE_KEY_USERINFO, JSON.stringify({ email }));
      } else {
        state.errorMessage = '로그인 요청이 실패했습니다. 토큰을 가져오지 못 했습니다.';
      }
    });
    builder.addCase(loginRequest.rejected, (state, action: any) => {
      state.isLoading = false;
      state.errorMessage = `로그인 요청이 실패했습니다. ${action.payload !== undefined ? action.payload : ''}`;
    });
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
