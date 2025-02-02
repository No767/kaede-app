import type React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails"; // Add this after creating BookDetails component
import BookList from "./components/BookList";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />{" "}
        {/* Dynamic routing */}
      </Routes>
    </Router>
  );
};

export default App;
