// Comment.tsx
import type React from "react";

interface CommentProps {
  author: string;
  content: string;
}

const Comment: React.FC<CommentProps> = ({ author, content }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <p>
        <strong>{author}</strong>: {content}
      </p>
    </div>
  );
};

export default Comment;
