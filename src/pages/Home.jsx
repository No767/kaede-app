import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books") // Replace with your backend API URL
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home-container">
      <h1>Kaede - Banned & Censored Books</h1>
      <div className="book-list">
        {books.map(book => (
          <Link key={book.id} to={`/book/${book.id}`} className="book-item">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

