import React from 'react';
import { Link } from 'react-router-dom';

// Example post data
const posts = [
  { id: 1, title: 'Understanding React Router' },
  { id: 2, title: 'A Guide to State Management in React' },
  { id: 3, title: 'Using Hooks Effectively' },
];

const PostList = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
