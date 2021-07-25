import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { useRouter } from "next/router";
import Post from "../../components/Post";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { useStore } from "react-redux";
import { add } from "../../features/posts/postsSlice";
import axios from "axios";

const StyledPost = styled.div`
  margin: auto;
`;

const Foobar: React.FC = () => {
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
      .get("https://simple-blog-api.crew.red/posts")
      .then((res) => {
        dispatch(add(res.data));
        setStatus("finished");
      })
      .catch((e) => {
        setStatus("error");
      });
  }, []);

  return (
    <Layout>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        "Error"
      ) : (
        <StyledPost>
          <Post post={post} />
        </StyledPost>
      )}
    </Layout>
  );
};

export default Foobar;
