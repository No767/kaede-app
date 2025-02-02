import type React from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
}

interface BookItemProps {
  book: Book;
}

export const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      {/* You can add more details or links to book details pages here */}
    </div>
  );
};
