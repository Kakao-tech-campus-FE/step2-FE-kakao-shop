import { LOGIN, LOGOUT } from "./actions";

// 초기 상태 정의
const initialState = {
    loggedIn: false,
    user: null,
    loginTime: null,
};

// 리듀서 함수 정의
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
                loginTime: action.payload.loginTime,
            };
        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
                user: null,
                loginTime: null,
            };
        default:
            return state;
    }
};

export default authReducer;
