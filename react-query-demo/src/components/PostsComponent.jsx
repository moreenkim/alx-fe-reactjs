import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch, // Refetch function provided by React Query
    isFetching, // Indicates if the data is being fetched
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000, // Data is considered fresh for 5 seconds
    cacheTime: 1000 * 60 * 10, // Data remains in cache for 10 minutes
    refetchOnWindowFocus: true, // Refetch data when window gains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button> {/* Refetch button */}
      {isFetching && !isLoading && <div>Updating...</div>} {/* Show fetching state */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
