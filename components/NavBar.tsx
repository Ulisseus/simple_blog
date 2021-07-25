import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledNav = styled.nav`
  padding: 0.5em 3em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid black;
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
  & > h1 {
    cursor: pointer;
  }
  & > ul {
    margin-left: auto;
    white-space: nowrap;
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
  margin: 0.5em 1em;
`;

export const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <StyledNav>
      <h1 onClick={() => router.push("/")}>A simple blog</h1>
      <ul>
        <NavButton onClick={() => router.push("/")}>Posts</NavButton>
        <NavButton onClick={() => router.push("/posts/new")}>
          Create Post
        </NavButton>
      </ul>
    </StyledNav>
  );
};
