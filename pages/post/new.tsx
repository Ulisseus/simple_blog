import React, { useState } from "react";
import axios from "axios";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //axios.post()
    const data = {
      title,
      body: message,
    };
    axios.post("https://simple-blog-api.crew.red/posts", data);
    setTitle("");
    setMessage("");
  };
  return (
    <form onSubmit={submitForm}>
      <h1>Create post</h1>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="body">Message</label>
      <textarea
        id="body"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreatePost;
