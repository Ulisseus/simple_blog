import React from "react";
import styled from "styled-components";

const TitleInput = styled.input`
  min-height: 2rem;
`;

const TitleLabel = styled.label`
  font-weight: bold;
  font-size: 1.5rem;
  color: #666666;
`;

const FormTitle: React.FC<{
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
}> = ({ setTitle, title }) => {
  return (
    <>
      <TitleLabel htmlFor="title">Title</TitleLabel>
      <TitleInput
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
    </>
  );
};

export default FormTitle;
