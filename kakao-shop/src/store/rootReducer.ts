import { CartReducer } from '@store/Cart/reducers';
import { DetailReducer } from '@store/Detail/reducers';
import { homeReducer } from '@store/Home/reducers';
import { signInReducer } from '@store/Login/reducers';
import { OrderReducer } from '@store/Order/reducers';
import { combineReducers } from 'redux';

import { signUpReducer } from './SignUp/reducers';

export const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  home: homeReducer,
  detail: DetailReducer,
  cart: CartReducer,
  order: OrderReducer,
});
