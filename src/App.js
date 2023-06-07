import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import CreatePostPage from './pages/CreatePostPage';
import PostListPage from './pages/PostListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="post/:id" element={<PostPage />} />
        <Route path="create" element={<CreatePostPage />} />
        <Route path="posts" element={<PostListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
