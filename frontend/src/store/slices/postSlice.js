import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    getPostsStart(state) {
      state.status = "loading";
    },
    getPostsSuccess(state, action) {
      state.status = "success";
      state.posts = action.payload;
    },
    getPostsFailure(state, action) {
      state.status = "failure";
      state.error = action.payload;
    },
  },
});

export const { getPostsStart, getPostsSuccess, getPostsFailure } =
  postSlice.actions;
export default postSlice.reducer;
