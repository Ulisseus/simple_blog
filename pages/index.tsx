import axios from "axios";
import styled, { css } from "styled-components";
import { posts } from "../testData/posts";
import { Post as PostType } from "../types/post";
import PostComponent from "../components/Post";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { add } from "../features/posts/postsSlice";
import PostList from "../components/PostList";

const NavBar: React.FC = () => {
  return (
    <nav>
      <h1>A simple blog</h1>
    </nav>
  );
};

const StyledPosts = styled.main`
  flex-grow: 1;
  background-color: gainsboro;
`;

const Footer: React.FC = () => {
  return <footer>2021</footer>;
};

const Posts: React.FC = () => {
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

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Home() {
  // axios
  //.get("https://simple-blog-api.crew.red/posts")
  //.then((res) => console.log(res.data));
  //const dispatch = useAppDispatch();
  //useEffect(() => {
  //dispatch(add(posts as PostType[]));
  //}, []);

  return (
    <Layout>
      <NavBar />
      <PostList />
      <Footer />
    </Layout>
  );
}
