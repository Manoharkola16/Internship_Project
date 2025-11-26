import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://192.168.0.194:5000";

// CREATE BLOG POST
export const createBlog = createAsyncThunk(
  "blog/createBlog",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/api/blogs`, payload);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to create blog");
    }
  }
);

// GET ALL BLOGS
export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/blogs`);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch blogs");
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Blog
      .addCase(createBlog.pending, (s) => { s.loading = true; })
      .addCase(createBlog.fulfilled, (s, a) => {
        s.loading = false;
        s.blogs.unshift(a.payload);
      })
      .addCase(createBlog.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })

      // Fetch Blogs
      .addCase(fetchBlogs.pending, (s) => { s.loading = true; })
      .addCase(fetchBlogs.fulfilled, (s, a) => {
        s.loading = false;
        s.blogs = a.payload;
      })
      .addCase(fetchBlogs.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      });
  },
});

export default blogSlice.reducer;
