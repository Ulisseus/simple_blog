import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { useRouter } from "next/router";
import Post from "../../components/Post";
import Layout from "../../components/Layout";

const Foobar: React.FC = () => {
  const posts = useAppSelector((state) => state.posts.value);
  console.log(posts, "posts");

  const router = useRouter();
  const id = Number.parseInt(router.query.post as string);
  console.log(id, "id");
  const post = posts.filter((p) => {
    return p.id === id;
  })[0];

  return (
    <Layout>
      <Post post={post} />
    </Layout>
  );
};

export default Foobar;
