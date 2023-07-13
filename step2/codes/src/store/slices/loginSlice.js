// 슬라이스: 각각의 리듀서에 해당하는 파일을 관리
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginState: localStorage.getItem("loginState"),
    timer: null, // 시간을 저장할 변수
};

const loginSlice = createSlice({
    name: "loginState",
    initialState,
    reducers: {
        setLogin: (state) => {
            state.loginState = true;
            state.timer = Date.now(); // 로그인 시간 기록
            localStorage.setItem("loginState", "true"); // 새로고침하면 로그인이 풀리는 걸 방지하기 위해, 로컬스토리지에 로그인 상태 저장
            localStorage.setItem("timer", state.timer);
        },
        setLogout: (state) => {
            state.loginState = false;
            state.email = null;
            localStorage.removeItem("loginState");
            localStorage.removeItem("email");
            localStorage.removeItem("timer");
        },
    },
});

export const { setLogin, setLogout } = loginSlice.actions;

export default loginSlice.reducer;
