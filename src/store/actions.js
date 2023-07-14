// src/store/actions.js

// 액션 타입 정의
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

// 액션 생성 함수
export const loginSuccess = (userInfo) => ({
  type: LOGIN_SUCCESS,
  payload: userInfo,
});

export const logout = () => ({
  type: LOGOUT,
});
