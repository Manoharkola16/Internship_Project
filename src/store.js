// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slice";

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// import { configureStore } from "@reduxjs/toolkit";
// import blogReducer from "./BlogSlice";
// import userReducer from "./slice";

// export const store = configureStore({
//   reducer: {
//     blogs: blogReducer,
//     user: userReducer,
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,  // 🚀 FIX HERE
//     }),
// });


import { configureStore } from "@reduxjs/toolkit";
import userReducer, { authReducer } from "./slice";
import blogReducer from "./BlogSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    blogs: blogReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});

