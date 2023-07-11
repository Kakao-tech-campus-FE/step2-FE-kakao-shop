import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services"
import Home from "../../pages/HomePage";

const initialState = {
  email: null,
  isLoggedIn : false,
  loading: false,  // 요청을 보냈을 때는 true, 아닌 경우: 요청이 없었거나, 실패했거나, 성공했을 때 false
  expirationTime : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setEmail: (state, action) => {
    //   state.email = action.payload.email;
    // },
    // extraReducers: (builder) => {
    //   builder.addCase(loginRequest.pending, (state, action) => {
    //     state.loading = true;
    //   });
    //   builder.addCase(loginRequest.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.email = action.payload.email;
    //   });
    //   builder.addCase(loginRequest.rejected, (state, action) => {
    //     state.loading = false;
    //   });

    // },
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.expirationTime = action.payload.expirationTime;
      state.isLoggedIn = true;
      // window.location.href = "/";
    },
    clearUser: (state) => {
      state.email = null;
      state.expirationTime = null;
      state.isLoggedIn = false;
    },

  },
});

// export const loginRequest = createAsyncThunk(
//   "user/loginRequest",
//   async (data) => {
//     const { email, password } = data;

//     if (typeof email !== 'string') {
//       throw new Error('이메일 형식이 올바르지 않습니다.');
//     }

//     if (typeof password !== 'string') {
//       throw new Error('비밀번호 형식이 올바르지 않습니다.');
//     }

//     const response = await login({ email, password }); // post: 데이터 생성, 데이터를 조회 보안이 필요한 경우
//     if(response.status === 200) 
//       userSlice.reducers.setUser();
//       window.location.href = "/"
      

//     return response.data;
//   }
// );

export const {  setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;