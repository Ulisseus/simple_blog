import React from "react";
import styled from "styled-components";

const NavBar: React.FC = () => {
  return (
    <nav>
      <h1>A simple blog</h1>
    </nav>
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
