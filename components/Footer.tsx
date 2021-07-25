import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 1px solid black;
  padding: 1em 2em;
  font-weight: bold;
  text-align: center;
`;

export const Footer: React.FC = () => {
  return <StyledFooter>2021</StyledFooter>;
};
