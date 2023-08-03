import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";

// import { ReactDOM } from "react";
// import App from "../App";
// import { Provider } from "react-redux";
// import store from "./store";
// import React from "react";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store = {store}>
//       <App/>
//     </Provider>
//   </React.StrictMode>
// )


const store = configureStore({
  reducer : {
    user : userReducer,
    product : productReducer,
  }
})

// const reducers = {
//   user: userReducer,
// };
// const rootReducer = combineReducers({ ...reducers });



// export const store = configureStore({
//   reducer: rootReducer,

// });

export default store;