import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/api";

const initialState = {
  email: null,
  loading: false, // 요청을 보냈을 때는 true, 아닌 경우: 요청이 없었거나, 실패했거나, 성공했을 때 false
};

const userSlice = createSlice({
  // name에 들어가는 값 "user"가 곧 unique한 구분자
  name: "user",
  initialState,
  reducers: {
    // LoginForm이나 Register에서 dispatch(setEmail()) 하면 아래 코드가 실행됨
    // payload는 dispatch(setEmail(payload)) 안에 들어가는 payload 값임
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
  // extraReducer는 initialState의 loading을 변경하는 Reducer이다.
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
    });
    // 아래 코드의 payload에 담기는 내용은 아래 loginRequest()에서 구현한 async 콜백 함수의 내용이다.
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loading = false;
      // state.email = action.payload.email;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

// 지금까지는 로그인에 대한 비동기 요청을 컴포넌트에서 실행해줬었다. (LoginForm.jsx 내 loginReq())
// 하지만 아래 코드를 사용하면 loginReq() 내 로직을 다 지우고 "loginRequest()" 한줄만 써서 요청을 보낼 수 있다.
export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async (data) => {
    const { email, password } = data;

    // 여기서 email, password 형식에 대한 에러 캐칭도 가능함.
    // if (typeof email !== "string")
    //   throw new Error("이메일 형식이 올바르지 않습니다.");
    // if (typeof password !== "string")
    //   throw new Error("비밀번호 형식이 올바르지 않습니다.");

    const response = await login({ email, password });
    // 로그인이 정상적으로 되었을 때만 상태 업데이트
    if (response.status === 200) {
      setEmail();
      window.location.href = '/';
    }
  }
);

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
