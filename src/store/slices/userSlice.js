// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import { login } from "../../services/user";


// //redux saga + react reduc : redux tookit 없이 쓰는 법. 툴킷 안쓰는 회사도 많음

// const initialState = {
//     email: null,
//     loading: false, // 요청을 보냈을 때는 트루 , 아닌경우(요청 없었거나 실패했거나 성공했을떄 false)
//     error: null
//     //에러가 있을 경우에 error.message값을 담는다.
// }

// const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         setEmail: (state, action) => {
//             state.email = action.payload.email;
//         }
//     },
//     // extraReducers에서는 파라미터로 builder라는 것을 받는다. 
//     extraReducers: (builder) => {
//         builder.addCase(loginRequest.pending, (state, action) => {
//             state.loading = true;
//         })
//         builder.addCase(loginRequest.fulfilled, (state, action) => {
//             state.loading = false;
//             state.email = action.payload.email;
//             //아래 리액트 thunck 의 response.data가 이 action.payload 안에 담김.
//         })
//         builder.addCase(loginRequest.rejected, (state, action) => {
//             state.loading = false;
//             // state.error = action.payload.error.message;
//         })//request 가 pending됐을떄 
//     }
// });
//로그인 하고 정상 콜백이 되면 setEmail 로 사용자의 이메일 저장하기.

// export const loginRequest = createAsyncThunk(
//     "user/loginRequest",
//     async (data) => {
//         const { email, password } = data;

//         //여기서 이메일이나 패스워드의 값이 옳은지 등에 대한 에러 캐치가 가능하다.
//         //if (typeof email !== 'string' {throw new Error('이메일 형식 틀림')})

//         const response = await login({ email, password });

//         if (response.status === 200) {
//             alert('로그인성공')
//                 .then((response) => {
//                     localStorage.setItem("token", response.headers.authorization);
//                     localStorage.setItem("email", email);
                    
//                     window.location.href = "/home";

//                 })
//                 .then(() => {
//                     window.location.href = "/home";
//                 })

//             return {
//                 email: email,
//                 token: response.headers.authorization,
//             };

//         }
//     })
// //로그인에 대한 비동기 요청을 컴포넌트에서 진행했는데 , 여기서 비동기 

// export const { setEmail } = userSlice.actions;
// export default userSlice.reducer;
