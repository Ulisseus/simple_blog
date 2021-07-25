import React from "react";
import styled from "styled-components";

const StyledMessage = styled.h1`
  margin: auto;
`;
export const Message: React.FC<{ message: string }> = ({ message }) => (
  <StyledMessage>{message}</StyledMessage>
);
