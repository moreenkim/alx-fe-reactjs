import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from './PostsComponent';

import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

const HomeComponent = () => (
  <div>
    <h1>Home</h1>
    <Link to="/posts">Go to Posts</Link>
  </div>
);



function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/posts" element={<PostsComponent />} />
      </Routes>
    </Router>
  </QueryClientProvider>
  );
}

export default App
