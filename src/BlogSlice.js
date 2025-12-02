// // // import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // // import axios from "axios";

// // // const BASE_URL = "https://robo-1-qqhu.onrender.com";

// // // /* -----------------------------------------------
// // //    ✅ GET ALL BLOGS 
// // // ------------------------------------------------ */
// // // export const getAllBlogs = createAsyncThunk(
// // //   "blogs/getAllBlogs",
// // //   async (_, { getState, rejectWithValue }) => { 
// // //     try {
// // //       const token = getState().user.token;
// // //       console.log(_)

// // //       const { data } = await axios.get(`${BASE_URL}/api/articles`, {
// // //         headers: {
// // //           Authorization: `Bearer ${_}`,
// // //         },
// // //       });

// // //       return data;
// // //     } catch (err) {
// // //       return rejectWithValue(err.response?.data || "Failed to fetch blogs");
// // //     }
// // //   }
// // // );

// // // /* -----------------------------------------------
// // //    ✅ CREATE BLOG 
// // // ------------------------------------------------ */
// // // export const createBlog = createAsyncThunk(
// // //   "blogs/createBlog",
// // //   async ({ title, content }, { getState, rejectWithValue }) => {
// // //     try {
// // //       const token = getState().user.token;

// // //       const { data } = await axios.post(
// // //         `${BASE_URL}/api/articles`,
// // //         { title, content },
// // //         {
          
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         }
// // //       );

// // //       return data;
// // //     } catch (err) {
// // //       return rejectWithValue(err.response?.data || "Failed to create blog");
// // //     }
// // //   }
// // // );

// // // /* -----------------------------------------------
// // //    👍 LIKE / UNLIKE BLOG
// // // ------------------------------------------------ */
// // // export const toggleLike = createAsyncThunk(
// // //   "blogs/toggleLike",
// // //   async (articleId, { getState, rejectWithValue }) => {
// // //     try {
// // //       const token = getState().user.token;

// // //       const { data } = await axios.put(
// // //         `${BASE_URL}/api/articles/${articleId}/like`,
// // //         {},
// // //         {
// // //           withCredentials: true,
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         }
// // //       );

// // //       return data;
// // //     } catch (err) {
// // //       return rejectWithValue(err.response?.data || "Failed to like article");
// // //     }
// // //   }
// // // );

// // // /* -----------------------------------------------
// // //    💬 ADD COMMENT
// // // ------------------------------------------------ */
// // // export const addComment = createAsyncThunk(
// // //   "blogs/addComment",
// // //   async ({ articleId, comment }, { getState, rejectWithValue }) => {
// // //     try {
// // //       const token = getState().user.token;

// // //       const { data } = await axios.post(
// // //         `${BASE_URL}/api/articles/${articleId}/comment`,
// // //         { content: comment },
// // //         {
// // //           withCredentials: true,
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         }
// // //       );

// // //       return data;
// // //     } catch (err) {
// // //       return rejectWithValue(err.response?.data || "Failed to add comment");
// // //     }
// // //   }
// // // );

// // // /* -----------------------------------------------
// // //    SLICE
// // // ------------------------------------------------ */
// // // const blogSlice = createSlice({
// // //   name: "blogs",
// // //   initialState: {
// // //     blogs: [],
// // //     loading: false,
// // //     error: null,
// // //   },
// // //   reducers: {},

// // //   extraReducers: (builder) => {
// // //     builder
// // //       /* GET ALL BLOGS */
// // //       .addCase(getAllBlogs.pending, (state) => {
// // //         state.loading = true;
// // //       })
// // //       .addCase(getAllBlogs.fulfilled, (state, action) => {
// // //         state.loading = false;
// // //         state.blogs = action.payload;
// // //       })
// // //       .addCase(getAllBlogs.rejected, (state, action) => {
// // //         state.loading = false;
// // //         state.error = action.payload;
// // //       })

// // //       /* CREATE BLOG */
// // //       .addCase(createBlog.fulfilled, (state, action) => {
// // //         state.blogs.unshift(action.payload);
// // //       })

// // //       /* LIKE BLOG */
// // //       .addCase(toggleLike.fulfilled, (state, action) => {
// // //         const updated = action.payload;
// // //         state.blogs = state.blogs.map((b) =>
// // //           b._id === updated._id ? updated : b
// // //         );
// // //       })

// // //       /* ADD COMMENT */
// // //       .addCase(addComment.fulfilled, (state, action) => {
// // //         const updated = action.payload;
// // //         state.blogs = state.blogs.map((b) =>
// // //           b._id === updated._id ? updated : b
// // //         );
// // //       });
// // //   },
// // // });

// // // export default blogSlice.reducer;

// // import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import axios from "axios";

// // const BASE_URL = "https://robo-1-qqhu.onrender.com"; // FIXED

// // const getAuthToken = (getState) => {
// //   return getState().user?.user?.token || null;
// // };

// // /* GET ALL BLOGS */
// // export const getAllBlogs = createAsyncThunk(
// //   "blogs/getAllBlogs",
// //   async (_, { getState, rejectWithValue }) => {
// //     try {
// //       const token = getAuthToken(getState);
// //       if (!token) return rejectWithValue("No token");

// //       const { data } = await axios.get(`${BASE_URL}/api/articles`, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       console.log(data)

// //       return data;
// //     } catch (err) {
// //       return rejectWithValue(err.response?.data);
// //     }
// //   }
// // );

// // /* CREATE BLOG */
// // export const createBlog = createAsyncThunk(
// //   "blogs/createBlog",
// //   async ({ title, content }, { getState, rejectWithValue }) => {
// //     try {
// //       const token = getAuthToken(getState);
// //       if (!token) return rejectWithValue("No token");

// //       const { data } = await axios.post(
       
// //         `${BASE_URL}/api/articles`,
// //         { title, content },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //        console.log(data)
// //       return data;
// //     } catch (err) {
// //       return rejectWithValue(err.response?.data);
// //     }
// //   }
// // );

// // /* LIKE BLOG */
// // export const toggleLike = createAsyncThunk(
// //   "blogs/toggleLike",
// //   async (articleId, { getState, rejectWithValue }) => {
// //     try {
// //       const token = getAuthToken(getState);
// //       if (!token) return rejectWithValue("No token");

// //       const { data } = await axios.put(
// //         `${BASE_URL}/api/articles/${articleId}/like`,
// //         {},
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );

// //       return data;
// //     } catch (err) {
// //       return rejectWithValue(err.response?.data);
// //     }
// //   }
// // );

// // /* ADD COMMENT */
// // export const addComment = createAsyncThunk(
// //   "blogs/addComment",
// //   async ({ articleId, comment }, { getState, rejectWithValue }) => {
// //     try {
// //       const token = getAuthToken(getState);
// //       if (!token) return rejectWithValue("No token");

// //       const { data } = await axios.post(
// //         `${BASE_URL}/api/articles/${articleId}/comment`,
// //         { text: comment }, // FIXED (backend needs `text`)
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );

// //       return data;
// //     } catch (err) {
// //       return rejectWithValue(err.response?.data);
// //     }
// //   }
// // );

// // /* REDUCER */
// // const blogSlice = createSlice({
// //   name: "blogs",
// //   initialState: {
// //     blogs: [],
// //     loading: false,
// //     error: null,
// //   },
// //   reducers: {},

// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(getAllBlogs.pending, (state) => {
// //         state.loading = true;
// //       })
// //       .addCase(getAllBlogs.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.blogs = action.payload;
// //       })
// //       .addCase(getAllBlogs.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.payload;
// //       })

// //       .addCase(createBlog.fulfilled, (state, action) => {
// //         state.blogs.unshift(action.payload);
// //       })

// //       .addCase(toggleLike.fulfilled, (state, action) => {
// //         const updated = action.payload;
// //         state.blogs = state.blogs.map((b) =>
// //           b._id === updated._id ? updated : b
// //         );
// //       })

// //       .addCase(addComment.fulfilled, (state, action) => {
// //         const updated = action.payload;
// //         state.blogs = state.blogs.map((b) =>
// //           b._id === updated._id ? updated : b
// //         );
// //       });
// //   },
// // });

// // export default blogSlice.reducer;

// // src/BlogSlice.js

// // import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import axios from "axios";

// // const BASE_URL = "https://robo-1-qqhu.onrender.com";

// // const getAuthToken = (getState) => {
// //   return getState().user?.user?.token || null;
// // };

// // /* GET ALL BLOGS */
// // export const getAllBlogs = createAsyncThunk(
// //   "blogs/getAllBlogs",
// //   async (_, { getState, rejectWithValue }) => {
// //     try {
// //       const token = getAuthToken(getState);
// //       if (!token) return rejectWithValue("No token");

// //       const { data } = await axios.get(`${BASE_URL}/api/articles`, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       console.log("ALL BLOGS:", data);

// //       return data;
// //     } catch (err) {
// //       return rejectWithValue(err.response?.data || "Error fetching blogs");
// //     }
// //   }
// // );

// // /* CREATE BLOG */
// // export const createBlog = createAsyncThunk(
// //   "blogs/createBlog",
// //   async ({ title, content }, { getState, rejectWithValue }) => {
// //     try {
// //       const token = getAuthToken(getState);
// //       if (!token) return rejectWithValue("No token");

// //       const { data } = await axios.post(
// //         `${BASE_URL}/api/articles`,
// //         { title, content },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       console.log("CREATED BLOG:", data);

// //       return data;
// //     } catch (err) {
// //       return rejectWithValue(err.response?.data || "Error creating blog");
// //     }
// //   }
// // );

// // /* LIKE / UNLIKE BLOG – UI updates locally */
// // export const toggleLike = createAsyncThunk(
// //   "blogs/toggleLike",
// //   async (articleId, { getState, rejectWithValue }) => {
// //     try {
// //       const token = getAuthToken(getState);
// //       if (!token) return rejectWithValue("No token");

// //       const userId = getState().user?.user?._id;

// //       // We don't care what backend returns, we update state locally
// //       await axios.put(
// //         `${BASE_URL}/api/articles/${articleId}/like`,
// //         {},
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );

// //       return { articleId, userId };
// //     } catch (err) {
// //       return rejectWithValue(err.response?.data || "Error toggling like");
// //     }
// //   }
// // );

// // /* ADD COMMENT */
// // export const addComment = createAsyncThunk(
// //   "blogs/addComment",
// //   async ({ articleId, comment }, { getState, rejectWithValue }) => {
// //     try {
// //       const token = getAuthToken(getState);
// //       if (!token) return rejectWithValue("No token");

// //       const { data } = await axios.post(
// //         `${BASE_URL}/api/articles/${articleId}/comment`,
// //         { text: comment },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );

// //       return data; // assuming API returns updated article
// //     } catch (err) {
// //       return rejectWithValue(err.response?.data || "Error adding comment");
// //     }
// //   }
// // );

// // /* SLICE */
// // const blogSlice = createSlice({
// //   name: "blogs",
// //   initialState: {
// //     blogs: [],
// //     loading: false,
// //     error: null,
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       /* GET ALL BLOGS */
// //       .addCase(getAllBlogs.pending, (state) => {
// //         state.loading = true;
// //         state.error = null;
// //       })
// //       .addCase(getAllBlogs.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.blogs = action.payload || [];
// //       })
// //       .addCase(getAllBlogs.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.payload || "Failed to fetch blogs";
// //       })

// //       /* CREATE BLOG */
// //       .addCase(createBlog.fulfilled, (state, action) => {
// //         if (action.payload) {
// //           state.blogs.unshift(action.payload);
// //         }
// //       })

// //       /* TOGGLE LIKE – update likes array locally */
// //       .addCase(toggleLike.fulfilled, (state, action) => {
// //         const { articleId, userId } = action.payload || {};
// //         if (!articleId || !userId) return;

// //         const blog = state.blogs.find((b) => b._id === articleId);
// //         if (!blog) return;

// //         if (!Array.isArray(blog.likes)) {
// //           blog.likes = [];
// //         }

// //         const index = blog.likes.indexOf(userId);

// //         if (index === -1) {
// //           // not liked yet → like it
// //           blog.likes.push(userId);
// //         } else {
// //           // already liked → unlike
// //           blog.likes.splice(index, 1);
// //         }
// //       })

// //       /* ADD COMMENT – replace updated article */
// //       .addCase(addComment.fulfilled, (state, action) => {
// //         const updated = action.payload;
// //         if (!updated?._id) return;

// //         state.blogs = state.blogs.map((b) =>
// //           b._id === updated._id ? updated : b
// //         );
// //       });
// //   },
// // });

// // export default blogSlice.reducer;


// // src/BlogSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const BASE_URL = "https://robo-1-qqhu.onrender.com";

// const getAuthToken = (getState) => {
//   return getState().auth?.user?.token || null;
// };

// // ---------------------------------------------
// // GET ALL BLOGS
// // ---------------------------------------------
// export const getAllBlogs = createAsyncThunk(
//   "blogs/getAllBlogs",
//   async (_, { getState, rejectWithValue }) => {
//     try {
//       const token = getAuthToken(getState);
//       if (!token) return rejectWithValue("No token");

//       const { data } = await axios.get(`${BASE_URL}/api/articles`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       return data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Error fetching blogs");
//     }
//   }
// );

// // ---------------------------------------------
// // CREATE BLOG
// // ---------------------------------------------
// export const createBlog = createAsyncThunk(
//   "blogs/createBlog",
//   async ({ title, content }, { getState, rejectWithValue }) => {
//     try {
//       const token = getAuthToken(getState);
//       if (!token) return rejectWithValue("No token");

//       const { data } = await axios.post(
//         `${BASE_URL}/api/articles`,
//         { title, content },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       return data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Error creating blog");
//     }
//   }
// );

// // ---------------------------------------------
// // LIKE / UNLIKE BLOG  (FIXED USER ID)
// // ---------------------------------------------
// export const toggleLike = createAsyncThunk(
//   "blogs/toggleLike",
//   async (articleId, { getState, rejectWithValue }) => {
//     try {
//       const token = getAuthToken(getState);

//       // FIXED — correct user id location
//       const userId = getState().auth?.user?.user?._id;

//       await axios.put(
//         `${BASE_URL}/api/articles/${articleId}/like`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       return { articleId, userId };
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Error toggling like");
//     }
//   }
// );

// // ---------------------------------------------
// // ADD COMMENT (returns updated blog)
// // ---------------------------------------------
// export const addComment = createAsyncThunk(
//   "blogs/addComment",
//   async ({ articleId, comment }, { getState, rejectWithValue }) => {
//     try {
//       const token = getAuthToken(getState);

//       const { data } = await axios.post(
//         `${BASE_URL}/api/articles/${articleId}/comment`,
//         { text: comment },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       return data; // updated blog
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Error adding comment");
//     }
//   }
// );

// // ---------------------------------------------
// // SLICE
// // ---------------------------------------------
// const blogSlice = createSlice({
//   name: "blogs",
//   initialState: {
//     blogs: [],
//     loading: false,
//     error: null
//   },
//   reducers: {},

//   extraReducers: (builder) => {
//     builder

//       // ---------------------------
//       // GET ALL BLOGS
//       // ---------------------------
//       .addCase(getAllBlogs.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getAllBlogs.fulfilled, (state, action) => {
//         state.loading = false;

//         // Normalize likes and comments
//         state.blogs = (action.payload || []).map((b) => ({
//           ...b,
//           likes: Array.isArray(b.likes) ? b.likes : [],
//           comments: Array.isArray(b.comments) ? b.comments : []
//         }));
//       })
//       .addCase(getAllBlogs.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // ---------------------------
//       // CREATE BLOG
//       // ---------------------------
//       .addCase(createBlog.fulfilled, (state, action) => {
//         const newBlog = {
//           ...action.payload,
//           likes: [],
//           comments: []
//         };
//         state.blogs.unshift(newBlog);
//       })

//       // ---------------------------
//       // LIKE / UNLIKE BLOG (Local UI update)
//       // ---------------------------
//       .addCase(toggleLike.fulfilled, (state, action) => {
//         const { articleId, userId } = action.payload;
//         const blog = state.blogs.find((b) => b._id === articleId);
//         if (!blog) return;

//         if (!Array.isArray(blog.likes)) blog.likes = [];

//         if (blog.likes.includes(userId)) {
//           blog.likes = blog.likes.filter((id) => id !== userId);
//         } else {
//           blog.likes.push(userId);
//         }
//       })

//       // ---------------------------
//       // ADD COMMENT (Instant UI update)
//       // ---------------------------
//       .addCase(addComment.fulfilled, (state, action) => {
//           console.log("ADD COMMENT RESPONSE FROM SERVER:", action.payload);
//         const updated = action.payload;

//         state.blogs = state.blogs.map((b) =>
//           b._id === updated._id
//             ? {
//                 ...updated,
//                 likes: Array.isArray(updated.likes) ? updated.likes : [],
//                 comments: Array.isArray(updated.comments) ? updated.comments : []
//               }
//             : b
//         );
//       });
//   }
// });


// export default blogSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://robo-1-qqhu.onrender.com";

const getAuthToken = (getState) => {
  return getState().auth?.user?.token || null;
};

/* GET ALL BLOGS */
export const getAllBlogs = createAsyncThunk(
  "blogs/getAllBlogs",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getAuthToken(getState);
      if (!token) return rejectWithValue("No token");

      const { data } = await axios.get(`${BASE_URL}/api/articles`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error fetching blogs");
    }
  }
);

/* CREATE BLOG */
export const createBlog = createAsyncThunk(
  "blogs/createBlog",
  async ({ title, content }, { getState, rejectWithValue }) => {
    try {
      const token = getAuthToken(getState);
      if (!token) return rejectWithValue("No token");

      const { data } = await axios.post(
        `${BASE_URL}/api/articles`,
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error creating blog");
    }
  }
);

/* LIKE / UNLIKE BLOG */
export const toggleLike = createAsyncThunk(
  "blogs/toggleLike",
  async (articleId, { getState, rejectWithValue }) => {
    try {
      const token = getAuthToken(getState);
      const userId = getState().auth?.user?._id;

      await axios.put(
        `${BASE_URL}/api/articles/${articleId}/like`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return { articleId, userId };
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error toggling like");
    }
  }
);

/* ADD COMMENT */
export const addComment = createAsyncThunk(
  "blogs/addComment",
  async ({ articleId, comment }, { getState, rejectWithValue }) => {
    try {
      const token = getAuthToken(getState);

      const { data } = await axios.post(
        `${BASE_URL}/api/articles/${articleId}/comment`,
        { text: comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return data; // data = { message, article }
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error adding comment");
    }
  }
);

/* SLICE */
const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    loading: false,
    error: null
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      /* LOAD BLOGS */
      .addCase(getAllBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = (action.payload || []).map((b) => ({
          ...b,
          likes: Array.isArray(b.likes) ? b.likes : [],
          comments: Array.isArray(b.comments) ? b.comments : []
        }));
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* CREATE BLOG */
      .addCase(createBlog.fulfilled, (state, action) => {
        const newBlog = {
          ...action.payload,
          likes: [],
          comments: []
        };
        state.blogs.unshift(newBlog);
      })

      /* LIKE BLOG */
      .addCase(toggleLike.fulfilled, (state, action) => {
        const { articleId, userId } = action.payload;
        const blog = state.blogs.find((b) => b._id === articleId);
        if (!blog) return;

        if (!Array.isArray(blog.likes)) blog.likes = [];

        if (blog.likes.includes(userId)) {
          blog.likes = blog.likes.filter((id) => id !== userId);
        } else {
          blog.likes.push(userId);
        }
      })

      /* ADD COMMENT */
      .addCase(addComment.fulfilled, (state, action) => {
        // FIX: backend returns { message, article }
        const updated = action.payload.article;

        state.blogs = state.blogs.map((b) =>
          b._id === updated._id
            ? {
                ...updated,
                likes: Array.isArray(updated.likes) ? updated.likes : [],
                comments: Array.isArray(updated.comments)
                  ? updated.comments
                  : []
              }
            : b
        );
      });
  }
});

export default blogSlice.reducer;

