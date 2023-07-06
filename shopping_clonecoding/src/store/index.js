import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import regiuserReducer from "./slices/regiuserSlice";

const store = configureStore({
  reducer : {
    // User reducer : email
    user : userReducer,
    regiuser : regiuserReducer
    //Products reducer : products
    // products : productsReducer

  }
});


export default store;