import React, { useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import FormTitle from "../../components/FormTitle";
import FormArea from "../../components/FormArea";
import styled from "styled-components";

const StyledForm = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  & > * {
    width: 50%;
    margin-top: 1em;
  }
`;

const StyledSubmit = styled.input`
  min-height: 2rem;
  font-size: 1.3rem;
  color: #666666;
`;

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(process.env["NEXT_PUBLIC_API"] as string, {
        title,
        body: message,
      })
      .then(() => {
        setTitle("");
        setMessage("");
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };
  return (
    <Layout>
      <StyledForm onSubmit={submitForm}>
        <h1>{error && "Error sending message..."}</h1>
        <h1>Create post</h1>
        <FormTitle setTitle={setTitle} title={title} />
        <FormArea setMessage={setMessage} message={message} />
        <StyledSubmit type="submit" value="Submit" />
      </StyledForm>
    </Layout>
  );
};

export default CreatePost;
