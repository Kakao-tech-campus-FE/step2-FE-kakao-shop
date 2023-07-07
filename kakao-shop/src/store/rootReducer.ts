import { signInReducer } from '@store/Login/reducers';
import { combineReducers } from 'redux';

import { signUpReducer } from './SignUp/reducers';

export const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
});
