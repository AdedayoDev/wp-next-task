"use client";

import { useState } from "react";

const Posts = ({ posts }) => {
  const [showAll, setShowAll] = useState(false);

  if (!posts || posts.length === 0) {
    return <p>No posts found.</p>;
  }

  const displayedPosts = showAll ? posts : posts.slice(0, 3);

  return (
    <div>
      <h1 className="text-5xl py-6 text-center">Part One</h1>
      <ul className="">
        {displayedPosts.map((post) => (
          <li key={post.id} >
            <h3
              dangerouslySetInnerHTML={{ __html: post.title }} className="text-xl font-semibold py-6"
            />
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </li>
        ))}
      </ul>

      {posts.length > 3 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="border rounded px-4 py-2 mt-4"
        >
          {showAll ? "Show recent posts" : "Show all posts"}
        </button>
      )}
    </div>
  );
};

export default Posts;
