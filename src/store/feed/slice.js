import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
  details: null,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      const posts = action.payload;
      state.posts = [...posts];
      state.loading = false;
    },
    detailsFetched: (state, action) => {
      state.details = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, postsFetched, detailsFetched } = feedSlice.actions;

export default feedSlice.reducer;
