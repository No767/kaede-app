const BookDetails: React.FC = () => {
  const [comments, setComments] = useState<CommentProps[]>([]);

  const handleAddComment = (author: string, content: string) => {
    setComments((prevComments) => [...prevComments, { author, content }]);
  };

  return (
    <div>
      <h2>Book Details</h2>
      <CommentForm onAddComment={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
};
