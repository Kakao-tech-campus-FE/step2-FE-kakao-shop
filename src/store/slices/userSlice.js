// slices : 각각의 reducer에 해당하는 파일들
// createSlice를 통해 slice를 만든다
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { login } from "../../components/services/user";
import Swal from 'sweetalert2'
// import { useNavigate } from "react-router-dom"; // 사용해봤으나 로직이 작동하지 않음

const initialState = {
    email: null,
    loading: false, // 요청을 보냈을 때는 true & 요청이 없거나 실패 혹은 성공 시 false
    token: null,
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
        setToken: (state, action) => {
            state.token = action.payload.token;
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
            console.log(action.payload);

            state.loading = false;
            // LoginForm의 setEmail 처리를 여기서 해버릴 수도 있음
            // 아래 loginRequest의 response.data가 payload에 담기게 된다!
            state.email = action.payload.email;
            state.token = action.payload.token;
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
        console.log(response)

        // 로그인 성공
        if(response.status === 200) {
            Swal.fire({
                title:'로그인 완료!',
                text: `안녕하세요 ${email}님! 
                저희 사이트에 오신 것을 환영합니다😊`,
                confirmButtonText:'확인',
            })
            .then(() => {
                const expirationDate = new Date().getTime() + 1000 * 60 * 30; // 30분 세팅

                localStorage.setItem("email", email);
                localStorage.setItem("token", response.headers.authorization);
                localStorage.setItem("tokenExpiration", expirationDate);
            })
            .then(() => {
                window.location.href = "/";
                // const navigate = useNavigate();
                // navigate("/");
            })
            return {
                email: email,
                token: response.headers.authorization,
            }
        }
        // return response.data; // (일반적인 경우)
    }
)

export const isTokenExpiration = () => {
    const tokenData = localStorage.getItem("tokenExpiration");
    if (tokenData) {
        // 현재 시각이 만료 시각보다 넘거가게 될 경우 모든 토큰정보 삭제(자동 로그아웃)
        // 다만, 별도로 새로고침을 시도하지 않을경우 로그인이 계속해서 유지됨...
        if (tokenData && new Date().getTime() > tokenData) {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("tokenExpiration");
        window.location.reload();
        }
    }
};

// slice를 만들면 actions이 return 된다.
// actions 안에는 reducers 안의 내용물들이 있다.
// 아래 구문은 userSlice의 reducers 중에 setEmail, setToken들을 가져와서 사용하는 것이다.
export const { setEmail, setToken } = userSlice.actions;

// reducer 자체도 export 해주어야 한다!
export default userSlice.reducer;