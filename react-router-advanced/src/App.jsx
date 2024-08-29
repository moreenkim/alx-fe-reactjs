import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Login from './components/Login';
import Blogs from "./components/Blogs";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import { AuthProvider } from "./components/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
        <Route path="/login" element={<Login />} />

          {/* Route to display the list of posts */}
          <Route path="/posts" element={<PostList />} />
          {/* Dynamic route to display individual post details */}
          <Route path="/blog/:id" element={<Blogs />} />

          <Route path="/post/:postId" element={<PostDetails />} />

          {/* Other routes */}
          {/* <Route path="profile/*" element={<Profile />} /> */}
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
