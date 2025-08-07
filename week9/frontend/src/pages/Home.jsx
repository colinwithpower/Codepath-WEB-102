import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../services/postService";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
      setLikes(Object.fromEntries(data.map((post) => [post.id, 0])));
    }
    fetchData();
  }, []);

  const handleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h2>MiniReddit</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <strong>{post.title}</strong>
            </Link>
            <p>{post.content}</p>
            <button onClick={() => handleLike(post.id)}>Like</button>
            <span>{likes[post.id]} likes</span>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
