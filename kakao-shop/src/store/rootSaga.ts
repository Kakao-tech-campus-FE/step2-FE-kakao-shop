import { signInSaga } from '@store/Login/saga';
import { all } from 'redux-saga/effects';

import { signUpSaga } from './SignUp/saga';

export default function* rootSaga() {
  yield all([signUpSaga(), signInSaga()]);
}
