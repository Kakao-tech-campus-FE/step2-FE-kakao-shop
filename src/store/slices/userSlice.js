import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../services/api";
import { setUserCookie } from "../../utils/cookie";

// 슬라이스를 만들때 주의할 점 : initial state를 꼭 만들어 줘야 한다
const initialState = {
  email: null,
  loading: false, // 요청을 보냈을 때는 true, 아닌 경우: 요청이 없었거나, 실패했거나, 성공했을 때 false
  //error: null, // 만약에 에러가 있는 경우에 error.message 값을 담는다. 이런식으로 에러를 처리할 수 있다. 아래 extraReducer의 rejected에서 이용
  token: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      // action으로 받은 email 정보를 state로 전달
      state.email = action.payload.email;
    },
  },
  extraReducers: (builder) => {
    /* loginRequest */
    // Promise의 pending(대기) 상태 : 이행하지도, 거부하지도 않은 초기 상태
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
    });
    // Promise의 fulfilled(이행) 상태: 연산이 성공적으로 완료됨.
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      const [tempEmail, tempToken] = [action.payload.email, action.payload.token]
      state.loading = false;
      state.email = tempEmail; // loginRequest의 return 값이 들어가게 됨
      state.token = tempToken;
      // add cookie - email, token 
      setUserCookie({email: tempEmail, token: tempToken})
    });
    // Promise의ㅣ rejected(거부): 연산이 실패함
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
      alert(action.error.message)
      //state.error = action.payload.error.message; //이런 식으로 에러를 담을 수도 있다.
    });

    /* registerRequest */
    builder.addCase(registerRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerRequest.fulfilled, (state, action) => {
      state.loading = false;
      alert("회원가입이 완료되었습니다.")
    });
    builder.addCase(registerRequest.rejected, (state, action) => {
      state.loading = false;
      alert(action.error.message)
    });
  }
})

export const loginRequest = createAsyncThunk(
  "user/login",
  async (data) => {
    const {email, password} = data;
    const response = await login({email, password});
    //return response.data
    return {
      email: email,
      token: response.headers.authorization,
    }; // 이런식으로 받아줘도 된다.
  }
);
export const registerRequest = createAsyncThunk(
  "user/join",
  async (data) => {
    const {email, password, username} = data;
    const response = await register({email, password, username});
    return response.data
  }
);

//만든 userSlice의 reducer를 export (reducer들은 .actions에 담겨있다.)
export const { setEmail } = userSlice.actions
// src/store/index.js는 export default로 userReducer를 받게 해놨으므로 userSlice의 리듀서도 export
export default userSlice.reducer;