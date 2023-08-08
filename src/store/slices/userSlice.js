// 슬라이스: 각각의 리듀서에 해당하는 파일을 관리
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/user";

const initialState = {
    email: localStorage.getItem("email"),
    loading: false, // 요청을 보낸 상태에서 true, 아닌 경우: 요청이 없었거나, 실패했거나, 성공했을 때 False
    // error: null, // 에러가 있는 경우에 error,message 값을 넣는다.
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = localStorage.getItem("email");
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
                localStorage.setItem("token", action.payload.token);
            });
            builder.addCase(loginRequset.rejected, (state, action) => {
                //로그인 거절
                state.loading = false;
                // state.error = action.payload.error.message; // payload 안에 정보가 객체 형태로 담겨있음 !!!
            });
        },
    },
});

export const loginRequset = createAsyncThunk(
    // 이 위치에서 변수에 대한 경고, 유효성 검사를 해도 됨
    "user/loginRequset",
    async (data) => {
        const { email, password } = data;
        const response = await login({ email, password }); //post: 데이터 생성, 데이터 조회 보안이 필요한 경우
        return {
            email,
            token: response.headers.authorization,
        };
    }
);

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
