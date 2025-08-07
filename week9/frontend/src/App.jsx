import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <>
      <header>
        <h1>MiniReddit</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
