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
    <StyledPost onClick={() => router.push(`/post/${post.id}`)}>
      <PostTitle>{post.title}</PostTitle>
      <PostBody>{post.body}</PostBody>
    </StyledPost>
  );
};

export default Post;
