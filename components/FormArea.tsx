import React from "react";
import styled from "styled-components";

const FormInput = styled.textarea`
  min-height: 8rem;
`;

const FormLabel = styled.label`
  font-weight: bold;
  font-size: 1.5rem;
  color: #666666;
`;

const FormArea: React.FC<{
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  message: string;
}> = ({ setMessage, message }) => {
  return (
    <>
      <FormLabel htmlFor="body">Message</FormLabel>
      <FormInput
        id="body"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
    </>
  );
};

export default FormArea;
