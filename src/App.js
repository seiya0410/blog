import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import CreatePostPage from "./pages/CreatePostPage";
import PostListPage from "./pages/PostListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
