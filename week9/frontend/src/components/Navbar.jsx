import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <h1 style={{ display: "inline", marginRight: "2rem" }}>MiniReddit</h1>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/create">Create Post</Link>
    </nav>
  );
}

export default Navbar;
