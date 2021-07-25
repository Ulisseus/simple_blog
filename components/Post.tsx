import React from "react";
import { Post as PostType } from "../types/post";

const Post: React.FC<{ post: PostType }> = ({ post }) => {
  return (
    <div>
      <b>{post.title}</b>
      <section>{post.body}</section>
    </div>
  );
};

export default Post;
