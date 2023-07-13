import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

//make redux store, parameter reducer object : userReducer
const store = configureStore({
  reducer : {
    // User reducer : email
    user : userReducer,
    //Products reducer : products
    // products : productsReducer

  }
});


export default store;