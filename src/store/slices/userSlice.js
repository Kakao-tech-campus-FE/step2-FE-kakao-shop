import { createSlice } from "@reduxjs/toolkit";

// 로그인 유효시간 확인
const isExpired =
  Date.now() > JSON.parse(localStorage.getItem("user"))?.expDate;

// 유효시간 지날 시, localStorage 데이터 삭제
if (isExpired) {
  localStorage.removeItem("user");
}

// 초기 상태: localStorage 값이 있다면 가져오고 없다면 null
// email : 유저 이메일
// token : 로그인시 발급받는 JWT 토큰
// expDate : 로그인 유지 만료시간
const initialState = {
  email: JSON.parse(localStorage.getItem("user"))?.email || null,
  token: JSON.parse(localStorage.getItem("user"))?.token || null,
  expDate: JSON.parse(localStorage.getItem("user"))?.expDate || null,
};

// userSlice
const userSlice = createSlice({
  // name -> 구분자
  name: "user",
  initialState,
  reducers: {
    // 로그인 시 : 전역 상태와 로컬스토리지 모두에 저장
    setUser: (state, action) => {
      // 로그인 유지시간, 밀리초 단위
      const duration = 1440 * 60 * 1000; // 하루 (1day)
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.expDate = Date.now() + duration;
      localStorage.setItem("user", JSON.stringify(state));
    },
    // 로그아웃 시
    logout: (state) => {
      state.email = null;
      state.token = null;
      state.expDate = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
