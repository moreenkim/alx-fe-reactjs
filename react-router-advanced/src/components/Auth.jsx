import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap around App component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Simulate login function
  const login = () => {
    setIsAuthenticated(true);
    navigate('/profile');  // Redirect to profile after login
  };

  // Simulate logout function
  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login');  // Redirect to login after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
