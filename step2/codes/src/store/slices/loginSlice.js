// 슬라이스: 각각의 리듀서에 해당하는 파일을 관리
import { createSlice } from "@reduxjs/toolkit";
import { loginRequset } from "./userSlice";

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
    extraReducer: (builder) => {
        //객체가 아니라 함수 | loading 부분을 가능하게 해줌
        builder.addCase(loginRequset.pending, (state, action) => {
            //로그인 요청이 진행중인 상황이므로 loading = true
            state.loading = true;
        });
        builder.addCase(loginRequset.fulfilled, (state, action) => {
            //promise가 정상적으로 resolve가 되면 fulfilled state로 넘어감 : 정상적으로 로그인이 되었다는 뜻.
            state.loading = false; //로그인이 되었으므로 loadind은 false가 되어야함.
            state.email = action.payload.email;
            console.log(action);
            localStorage.setItem("token", action.payload.token);
        });
        builder.addCase(loginRequset.rejected, (state, action) => {
            //로그인 거절
            state.loading = false;
            // state.error = action.payload.error.message; // payload 안에 정보가 객체 형태로 담겨있음 !!!
        });
    },
});

export const { setLogin, setLogout } = loginSlice.actions;

export default loginSlice.reducer;
