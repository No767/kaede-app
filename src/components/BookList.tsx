import type React from "react";
import { BookItem } from "./BookItem"; // We'll create this next

// Define a type for the book to give us more control over the data
interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
}

const books: Book[] = [];

const BookList: React.FC = () => {
  return (
    <div>
      <h1>Books Published</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <BookItem book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
