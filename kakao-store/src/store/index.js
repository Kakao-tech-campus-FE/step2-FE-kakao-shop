import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import productReducer from "./slices/productSlice"
import createSagaMiddleware from "redux-saga";
import getProductSaga from "./slices/saga/products";
import { call, all } from "redux-saga/effects";


const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
	yield all([call(getProductSaga)]);
}

const store = configureStore({
	reducer: {
		// User reducer: email
		user: userReducer,
		// Products reducer: products
		product: productReducer
	},
	middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;