import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostListPage() {
  const [postIDs, setPostIDs] = useState(null);

  useEffect(() => {
    const fetchPostIDs = async () => {
      const response = await fetch("https://kv.seiyalife.xyz/index");
      const ids = await response.json();
      setPostIDs(ids);
    };

    fetchPostIDs();
  }, []);

  if (!postIDs) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Post List</h1>
      {postIDs.map((id) => (
        <div key={id}>
          <Link to={`/post/${id}`}>Post ID: {id}</Link>
        </div>
      ))}
    </div>
  );
}

export default PostListPage;
