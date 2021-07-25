import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledNav = styled.nav`
  padding: 0.5em 3em;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  & > h1 {
    font-family: "ultra";
    font-size: 3rem;
    @font-face {
      font-family: "ultra";
      src: url("/Ultra-Regular.ttf");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }
  }
  & > ul {
    margin-left: auto;
  }
  & > ul > li {
    display: inline;
    cursor: pointer;
    &:hover {
      color: #6b6b6b;
    }
  }
`;

const NavButton = styled.li`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 1em;
`;

const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <StyledNav>
      <h1>A simple blog</h1>
      <ul>
        <NavButton onClick={() => router.push("/")}>Posts</NavButton>
        <NavButton onClick={() => router.push("/post/new")}>
          Create Post
        </NavButton>
      </ul>
    </StyledNav>
  );
};

const Footer: React.FC = () => {
  return <footer>2021</footer>;
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledChildren = styled.main`
  flex-grow: 1;
  display: flex;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <NavBar />
      <StyledChildren>{children}</StyledChildren>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
