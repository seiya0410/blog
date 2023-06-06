import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://your-worker-url.workers.dev/${id}`);
      const postData = await response.json();
      setPost(postData);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostPage;
