// src/store/reducers.js

import { LOGIN_SUCCESS, LOGOUT } from './actions';

// 초기 상태 정의
const initialState = {
  userInfo: null,
};

// 리듀서 함수 작성
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default rootReducer;
