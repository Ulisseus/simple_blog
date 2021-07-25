import React from "react";
import styled from "styled-components";
import { Post as PostType } from "../types/post";
import { useRouter } from "next/router";

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  background-color: white;
  border-bottom: 1px solid black;
  margin: 1em 2em;
`;

const Post: React.FC<{ post: PostType }> = ({ post }) => {
  const router = useRouter();
  return (
    <StyledPost onClick={() => router.push(`/post/${post.id}`)}>
      <b>{post.title}</b>
      <section>{post.body}</section>
    </StyledPost>
  );
};

export default Post;
