import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <nav>
        <ul>
          <li><Link to="/create">Create a New Post</Link></li>
          <li><Link to="/posts">View All Posts</Link></li>
          {/* To view a specific post, you will need the post id. Here is an example for post with id 123 */}
          <li><Link to="/posts/123">View Post 123</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;