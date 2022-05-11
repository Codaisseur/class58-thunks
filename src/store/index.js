import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feed/slice";

export default configureStore({
  reducer: {
    feed: feedReducer,
  },
});
