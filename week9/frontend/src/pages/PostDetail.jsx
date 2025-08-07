import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../services/postService";
import { getComments, addComment } from "../services/commentService";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    async function fetchData() {
      const fetchedPost = await getPostById(id);
      setPost(fetchedPost);
      const fetchedComments = await getComments(id);
      setComments(fetchedComments);
    }
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = await addComment(id, newComment);
    setComments((prev) => [...prev, comment]);
    setNewComment("");
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <hr />
      <h3>Comments</h3>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.content}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add comment"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default PostDetail;
