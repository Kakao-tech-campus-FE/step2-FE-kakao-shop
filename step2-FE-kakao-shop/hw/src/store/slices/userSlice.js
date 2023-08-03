import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/user";
import { login } from "../../services/user";

const initialState = {
  email: null,
  // 요청 보냈을 때는 true, 아닌경우: 요청X, 실패, 성공시 false
  loading: false,
  token: null,
  isLogined: false,
  token: null,
  isLogined: false,
};

const userSlice = createSlice({
  // "user"는 구분자, 유니크해야함
  name: "user",
  initialState,
  reducers: {
    // setEmail 부분이 setter 느낌
    setEmail: (state, action) => {
      state.email = action.payload.email;
      state.isLogined = true;
      state.isLogined = true;
      localStorage.setItem("email", action.payload.email);
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    logOut: (state, action) => {
      state.email = null;
      state.isLogined = false;
      state.isLogined = false;
      localStorage.removeItem("email");
      localStorage.removeItem("isLogined");
      localStorage.removeItem("isLogined");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogined = true;
      state.isLogined = true;
      // createAsyncThunk한게 다 페이로드에 담김
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.token = action.payload.token;
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("isLogined", true);
      localStorage.setItem("isLogined", true);
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
    const response = await login({ email, password }); // post 요청: 데이터 생성, 데이터 조회 보안이 필요한 경우
    return {
      email,
      token: response.headers.authorization,
    };
  }
);

export const { setToken, logOut } = userSlice.actions;

export const setEmail = (payload) => {
  return (dispatch) => {
    dispatch(userSlice.actions.setEmail(payload));
    localStorage.setItem("isLogined", true);
  };
};

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
