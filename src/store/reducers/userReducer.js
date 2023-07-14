const initialState = {
  user: null,
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;

