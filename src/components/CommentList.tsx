const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div>
      <h3>Comments:</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index}>
            <p>
              <strong>{comment.author}</strong>: {comment.content}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList; // Ensure this is present
