import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    }
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

// Redux Toolkit으로 리팩토링 하기 전의 코드
// import { loginApi } from "../apis/api";
// export const login = ({email, password}) => async (dispatch, getState) => {
//   // 로그인 API 호출 등 로그인 처리 로직 작성
// 	try {
//     const response = await loginApi({email, password}); 
//     const user = { username: email };
//     // 응답 처리
//     if(response && response.data.success) {
//       await dispatch(loginSuccess(user));
//       localStorage.setItem('isLoggedIn', calculateTomorrowTime());
//       localStorage.setItem('userInfo', response.headers.authorization);
//     } else {
//       //로그인 실패 처리
//       await dispatch(logout());
//     }
//     // setCookie('isLoggedIn', 'true', 1); // 1일 동안 유지되는 쿠키
//     // setCookie('username', username, 1);
// 	} catch (error) {
// 			await dispatch(logout());
// 			throw error;
// 	}
// };

// const calculateTomorrowTime = () => {
//   const currentDate = new Date();
//   currentDate.setDate(currentDate.getDate() + 1);
//   const year = currentDate.getFullYear().toString().padStart(4, '0');
//   const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
//   const day = currentDate.getDate().toString().padStart(2, '0');
//   const hours = currentDate.getHours().toString().padStart(2, '0');
//   const minutes = currentDate.getMinutes().toString().padStart(2, '0');
//   const formattedTime = year + month + day + hours + minutes;
//   return formattedTime;
// }
//   // const setCookie = (name, value, days) => { //입력받은 days 만큼의 유효기간 가진 쿠키 생성 메소드
//   //   const expirationDate = new Date();
//   //   expirationDate.setDate(expirationDate.getDate() + days);
//   //   const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : '');
//   //   document.cookie = `${name}=${cookieValue}; path=/`;
//   // };

//   // 로그아웃 액션 반환
// export const logout = () => {
//   return {
//     type: "LOGOUT",
//   };
// };
// export const loginSuccess = (user) => {
// 	return {
// 		type: "LOGIN_SUCCESS",
// 		user
// 	};
// };

