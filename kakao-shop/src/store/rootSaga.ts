import { CartSaga } from '@store/Cart/saga';
import { DetailSaga } from '@store/Detail/saga';
import { homeSaga } from '@store/Home/saga';
import { signInSaga } from '@store/Login/saga';
import { OrderSaga } from '@store/Order/saga';
import { all } from 'redux-saga/effects';

import { signUpSaga } from './SignUp/saga';

export default function* rootSaga() {
  yield all([signUpSaga(), signInSaga(), homeSaga(), DetailSaga(), CartSaga(), OrderSaga()]);
}
