import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { useRouter } from "next/router";
import Post from "../../components/Post";
import { Message } from "../../components/Message";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { add } from "../../features/posts/postsSlice";
import axios from "axios";

const StyledPost = styled.div`
  margin: auto;
`;

const PostPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<"loading" | "error" | "finished">(
    "loading"
  );
  const posts = useAppSelector((state) => state.posts.value);
  const router = useRouter();
  const id = Number.parseInt(router.query.post as string);
  const post = posts.filter((p) => {
    return p.id === id;
  })[0];

  useEffect(() => {
    axios
      .get(process.env["NEXT_PUBLIC_API"] as string)
      .then((res) => {
        dispatch(add(res.data));
        setStatus("finished");
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  return (
    <Layout>
      {status === "loading" ? (
        <Message message="Loading..." />
      ) : status === "error" ? (
        <Message message="Error while fetching data from the server ;(" />
      ) : (
        <StyledPost>
          <Post post={post} />
        </StyledPost>
      )}
    </Layout>
  );
};

export default PostPage;
