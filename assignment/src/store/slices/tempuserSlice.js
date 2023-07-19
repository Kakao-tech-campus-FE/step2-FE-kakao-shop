// //reducer에 해당하는 파일들을 관리합니다
// // 여기에 만든 파일들을 store에다가 저장

// // 로그인을 통해서 정상 콜백이 되면
// // setEmail을 통해서 사용자의 email을 initialState안의 값에다가 저장을 해주고 싶다.
// // 그러면 로그인이 이미 된 사용자라면 initial에 계속 담겨져있을거임
// import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import { login } from '../../services/api';

// const initialState = {
//     email : null,
//     loading:false, // 요청을 보냈을 때 : true 아닌 경우 : 요청이 없거나, 실패, 성공 : false
//     // 작동테스트
//     error:null

// }

// const userSlice = createSlice({

//     // name에 들어가는 값 : 구분자, 모두 다 유니크해야함
//     name:"user",
//     initialState,
//     reducers:{
//         // 이부분이 setter에 해당하는 부분
//         setEmail: (state, action) => {
//             //state 안의 email은 action의 payload의 이메일 값을 바인딩 해준다.
//             state.email = action.payload.email;
//         },
//     },
//     // 개체가 아니라 함수,
//     // redux- thunk을 쓰는 이유
//     // : 중간을 처리해줄 수 있다는 것
//     extraReducers: (builder) => {
//         builder.addCase(loginRequest.pending, (state, action) => {
//             state.loading = true;
//         });
//         // Promise가 정상적인 resolve
//         // fulfilled : 로그인이 잘 됐다.(200)
//         builder.addCase(loginRequest.fulfilled, (state, action)=> {
//             state.loading= false;
//             state.email = action.payload.email;
//             localStorage.setItem("token", action.payload.token);
//             // state.token = action.payload.token;
//             alert('로그인 성공!');
//             window.location.href="/";

//         });
//         // rejected 되는 경우
//         builder.addCase(loginRequest.rejected, (state, action)=> {

//             state.loading= false;
//             alert('로그인 실패!');
//             console.log(action.error.message);
//         });
//     }
// });
// // 1파라미터 : unique key
// // 2파라미터 : 비동기 : async callback함수
// // 무슨 효과?
// // 비동기요청을 컴포넌트에서 진행했었는데 (loginReq)
// // LoginForm에서는 그냥 코드 한줄로 쓱싹하도록
// // + 중간데이터 상태를 Reducer에서 관리할 수 있다.
// export const loginRequest = createAsyncThunk(
//     "user/login",
//     async (data) => {
//         const {email, password} = data;
//         const response = await login({email, password});
//         return {
//             email,
//             token : response.headers.authorization,
//         }
//     }
// )
// // createSlice를 통해 slice를 만든다.
// //slice를 만들면 action이 리턴이 된다.
// // action은 reducer안에 담겨있는 것,
// // 만약 setEmail을 여러 function을 만든다면 다 action에 담긴다는 거임
// export const  {setEmail} = userSlice.actions;
// export default userSlice.reducer;
// // login을 통해 전달된 데이터들은 다 payload에 담긴다.

// // redux saga + react -redux 이거쓰는 사람도 있으니까 필요하면 고고

// // 이미 axios 요청을 만들어놨음
//         // post  요청 : 데이터 생성, 조회 보안이 필요할 경우 post요청을 쏜다.
//         // 에러catching
//         // rejected 안에서 관리가 가능하다.
//         // if(typeof email !== 'string'){
//         //     throw new Error('이메일 형식이 올바르지 않습니다.');
//         // }
//         // if(typeof password !== 'string'){
//         //     throw new Error('비밀번호 형식이 올바르지 않습니다.')
//         // }
