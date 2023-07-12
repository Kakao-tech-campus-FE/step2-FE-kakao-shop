// 슬라이스: 각각의 리듀서에 해당하는 파일을 관리
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timer: null, // 시간을 저장할 변수
};

const loginSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        setLogin: (state) => {
            state.timer = Date.now(); // 로그인 시간 기록
            localStorage.setItem("timer", state.timer);
        },
        setLogout: (state) => {
            state.email = null;
            localStorage.removeItem("email");
            localStorage.removeItem("timer");
        },
    },
});

export const { setLogin, setLogout } = loginSlice.actions;

export default loginSlice.reducer;
