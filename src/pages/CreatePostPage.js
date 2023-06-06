import React, { useState } from "react";

function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate a unique ID for the new post
    const id = Date.now().toString();

    // Replace with your actual Cloudflare Worker URL
    const workerURL = "https://kv.seiyalife.xyz";

    const response = await fetch(workerURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title, content }),
    });

    if (!response.ok) {
      console.error("Failed to create post:", await response.text());
    } else {
      console.log("Post created successfully");
      // Reset the form fields
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <h1>Create a new post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePostPage;
