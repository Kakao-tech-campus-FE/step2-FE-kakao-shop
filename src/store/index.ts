import type { CartState } from '@store/Cart/reducers';
import type { DetailState } from '@store/Detail/reducers';
import type { HomeState } from '@store/Home/reducers';
import type { SignInState } from '@store/Login/reducers';
import { OrderState } from '@store/Order/reducers';
import type { SignUpState } from '@store/SignUp/reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

export type RootState = {
  home: HomeState;
  signIn: SignInState;
  signUp: SignUpState;
  detail: DetailState;
  cart: CartState;
  order: OrderState;
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
