import React from "react";
import styled from "styled-components";
import { Post as PostType } from "../types/post";
import { useRouter } from "next/router";

const StyledPost = styled.div`
  padding: 0.5em 1em;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  background-color: white;
  border: 1px solid black;
  margin: 1em 2em;
  cursor: pointer;
  border-radius: 3px;
  &:nth-child(5n) {
    grid-column: span 2;
    grid-row: span 2;
    height: 100%;
  }
  &:nth-child(2n + 1) {
    grid-column: span 1;
    grid-row: span 2;
    height: 100%;
  }
`;

const PostTitle = styled.b`
  font-size: 1.5em;
`;

const PostBody = styled.section`
  margin: 1em auto;
  color: #797979;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Post: React.FC<{ post: PostType }> = ({ post }) => {
  const router = useRouter();
  return (
    <StyledPost onClick={() => router.push(`/posts/${post.id}`)}>
      <PostTitle>{post.title}</PostTitle>
      <PostBody>{post.body}</PostBody>
    </StyledPost>
  );
};

export default Post;
