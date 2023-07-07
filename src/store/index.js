import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productSlice";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import getProductSaga from "./sagas/product";

const SagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([getProductSaga]);
}

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productsReducer,
  },
  middleware: [SagaMiddleware],
});

SagaMiddleware.run(rootSaga);

export default store;
