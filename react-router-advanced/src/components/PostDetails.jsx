import React from 'react';
import { useParams } from 'react-router-dom';

// Example post data (you might fetch this data from an API in a real app)
const posts = [
  { id: 1, title: 'Understanding React Router', content: 'React Router is a library...' },
  { id: 2, title: 'A Guide to State Management in React', content: 'State management is crucial...' },
  { id: 3, title: 'Using Hooks Effectively', content: 'Hooks are a powerful feature...' },
];

const PostDetails = () => {
  const { postId } = useParams();
  const post = posts.find(p => p.id === parseInt(postId));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetails;
