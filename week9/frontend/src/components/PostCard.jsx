import { Link } from "react-router-dom";
import VoteButtons from "./VoteButtons";

function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", marginBottom: "1rem" }}>
      <h2>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.content}</p>
      <VoteButtons post={post} />
    </div>
  );
}

export default PostCard;
