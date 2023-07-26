import { CartReducer } from '@store/Cart/reducers';
import { DetailReducer } from '@store/Detail/reducers';
import { homeReducer } from '@store/Home/reducers';
import { signInReducer } from '@store/Login/reducers';
import { combineReducers } from 'redux';

import { signUpReducer } from './SignUp/reducers';

export const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  home: homeReducer,
  detail: DetailReducer,
  cart: CartReducer,
});
