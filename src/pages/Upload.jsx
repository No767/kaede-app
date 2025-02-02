import React, { useState } from "react";
import axios from "axios";

function Upload() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/upload", { title, author, content })
      .then(response => alert("Book uploaded successfully!"))
      .catch(error => console.error(error));
  };

  return (
    <div className="upload-container">
      <h1>Upload a Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
