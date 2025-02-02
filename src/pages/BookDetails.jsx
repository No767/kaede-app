import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/book/${id}`)
      .then(response => {
        setBook(response.data.book);
        setComments(response.data.comments);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/book/${id}/comment`, { comment })
      .then(response => setComments([...comments, response.data]))
      .catch(error => console.error(error));
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <h2>By {book.author}</h2>
      <p>{book.content}</p>

      <h3>Comments</h3>
      {comments.map((c, index) => (
        <p key={index}>{c.text}</p>
      ))}

      <form onSubmit={handleCommentSubmit}>
        <textarea value={comment} onChange={e => setComment(e.target.value)} required />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}

export default BookDetails;
