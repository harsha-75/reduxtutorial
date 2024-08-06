import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../feautures/posts/postSlice'
import userReducer from '../feautures/users/userSlice'
export const store= configureStore({
      reducer:{
            posts :postReducer,
            user: userReducer
      }
})