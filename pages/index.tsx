import axios from "axios";
import styled, { css } from "styled-components";
import { posts } from "../testData/posts";
import { Post as PostType } from "../types/post";
import PostComponent from "../components/Post";

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
  return (
    <Layout>
      <NavBar />
      <Posts />
      <Footer />
    </Layout>
  );
}
