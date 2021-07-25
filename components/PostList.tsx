import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { add } from "../features/posts/postsSlice";
import axios from "axios";
import { Post as PostType } from "../types/post";
import PostComponent from "./Post";

const StyledPosts = styled.main`
  flex-grow: 1;
  background-color: gainsboro;
`;

const PostList: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.value);
  useEffect(() => {
    axios
      .get("https://simple-blog-api.crew.red/posts")
      .then((res) => dispatch(add(res.data)));
  }, []);
  return (
    <StyledPosts>
      {posts.map((p) => {
        return <PostComponent post={p as PostType} key={p.id} />;
      })}
    </StyledPosts>
  );
};

export default PostList
