import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/api";

const initialState = {
  email: null,
  // 요청 보냈을 때는 true, 아닌경우: 요청X, 실패, 성공시 false
  loading: false,
};

const userSlice = createSlice({
  // "user"는 구분자, 유니크해야함
  name: "user",
  initialState,
  reducers: {
    // setEmail 부분이 setter 느낌
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    extraReducers: (builder) => {
      builder.addCase(loginRequest.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(loginRequest.fulfilled, (state, action) => {
        state.loading = false;
        // createAsyncThunk한게 다 페이로드에 담김
        state.email = action.payload.email;
        localStorage.setItem("token", action.payload.token);
      });
      builder.addCase(loginRequest.rejected, (state, action) => {
        state.loading = false;
      });
    },
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

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
