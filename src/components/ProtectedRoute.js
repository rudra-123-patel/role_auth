import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Component, roles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />; 
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" />; 
  }

  return Component;  
};

export default ProtectedRoute;
