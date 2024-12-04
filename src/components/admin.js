import React from 'react';
import { useAuth } from './AuthContext';
import Logout from './logout';
import Navbar from './navbar';

const Admin = () => {
  const { user } = useAuth();

  return (
    <div>
        <Navbar />
      <h1>Hello, Admin {user?.username}</h1>
      <Logout />
    </div>
  );
};

export default Admin;
