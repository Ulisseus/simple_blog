import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { add } from "../features/posts/postsSlice";
import axios from "axios";
import { Post as PostType } from "../types/post";
import PostComponent from "./Post";

const StyledPosts = styled.div`
  background-color: gainsboro;
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1em 2em;
  grid-gap: 1em;
  & > div:nth-child(5n) {
    grid-column: span 2;
    grid-row: span 2;
    height: 100%;
  }
  & > div:nth-child(2n + 1) {
    grid-column: span 1;
    grid-row: span 2;
    height: 100%;
  }
`;

const PostList: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.value)
    .filter((p) => {
      return p.title && p.body;
    })
    .sort((a, b) => b.id - a.id);
  useEffect(() => {
    axios
      .get(process.env["NEXT_PUBLIC_API"] as string)
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

export default PostList;
