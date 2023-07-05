// slices : 각각의 reducer에 해당하는 파일들
// createSlice를 통해 slice를 만든다
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { login } from "../../components/services/api";

const initialState = {
    email: null,
    loading: false, // 요청을 보냈을 때는 true & 요청이 없거나 실패 혹은 성공 시 false
    // error: null, // 만약 에러가 있는 경우 error.message 값을 담는다!
}

const userSlice = createSlice({
    // name에 들어가는 값이 구분자(key 역할)가 된다(다른 slice와 겹치치 않아야 한다)
    name: "user",
    initialState,

    // reducers : 상태를 전달하는 함수
    // set함수를 통해 전달된 데이터들은 모두 payload에 담겨져서 전달된다
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email;
        },
    },

    // extraReducers에서는 파라미터로 builder라는 것을 받는다. 
    // loginRequest의 pending state는 어떻게 처리하면 되는가 ~ 에 대한 내용
    extraReducers: (builder) => {
        builder.addCase(loginRequest.pending, (state, action) => {
            state.loading = true;
        });
        // Promise가 정상적으로 resolve되면 fulfilled state로 넘어가게 된다.
        // -> 로딩이 정상적으로 되었다!
        builder.addCase(loginRequest.fulfilled, (state, action) => {
            state.loading = false;
            // LoginForm의 setEmail 처리를 여기서 해버릴 수도 있음
            // 아래 loginRequest의 response.data가 payload에 담기게 된다!
            state.email = action.payload.email; 
        });
        builder.addCase(loginRequest.rejected, (state, action) => {
            state.loading = false; // rejected 되는 경우에는 loading만 false로!
            // state.error = action.payload.error.message; // 페이로드에 담긴 에러 메세지를 담음!(이렇게 할 수도 있다~)
        });
    }
})

// createAsyncThunk는 2개의 파라미터를 받는다.
// 1번째 파라미터 : Unique한 Key값
// 2번째 파라미터 : 비동기 콜백 함수
// login에 대한 비동기 요청을 원래는 컴포넌트에서 진행한다.
// 근데 얘를 이용하면 컴포넌트의 비동기 코드를 짧게 축약할 수 있다!
export const loginRequest = createAsyncThunk(
    "user/loginRequest",
    async (data) => {
        const { email, password } = data;
        const response = await login({ email, password });
        return response.data; // (일반적인 경우)
        // return {
        //     email: email,
        //     token: response.headers.authorization,
        // }
    }
)

// slice를 만들면 actions이 return 된다.
// actions 안에는 reducers 안의 내용물들이 있다.
// 아래 구문은 userSlice의 reducers 중에 setEmail만 가져와서 사용하는 것이다.
export const { setEmail } = userSlice.actions;

// reducer 자체도 export 해주어야 한다!
export default userSlice.reducer;