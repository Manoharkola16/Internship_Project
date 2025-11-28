import { configureStore } from "@reduxjs/toolkit";
import userReducer, { authReducer } from "./slice";
import blogReducer from "./BlogSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    blogs: blogReducer,

  },
});