import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
