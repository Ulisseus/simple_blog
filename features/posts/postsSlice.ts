import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { Post as PostType } from "../../types/post";

interface PostSlice {
  value: PostType[];
}

const initialState: PostSlice = {
  value: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PostType>) => {
      [...state.value, action.payload];
    },
  },
});

export const { add } = postSlice.actions;
export const selectPosts = (state: RootState) => state.posts.value;

export default postSlice.reducer;
