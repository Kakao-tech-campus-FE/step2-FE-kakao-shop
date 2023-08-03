import { getCookie } from "../constants/cookie";

const SET_LOGGED_IN = "isLoggedIn/SET_LOGGED_IN";

export const setLoggedIn = (value) => ({ type: SET_LOGGED_IN, value });

const token = getCookie("accessToken");
const initialState = {
  isLoggedIn: !!token,
};

const isLoggedIn = ( state = initialState, action ) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.value
      };
    default:
      return state;
  }
}

export default isLoggedIn;