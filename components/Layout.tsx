import React from "react";
import styled from "styled-components";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

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
