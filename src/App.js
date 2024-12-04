import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import { AuthProvider } from './components/AuthContext';
import Login from './components/login';
import Logout from './components/logout';
import Admin from './components/admin';
import User from './components/user';
import Home from './components/home';
import ProtectedRoute from './components/ProtectedRoute'; 
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes> 
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<ProtectedRoute element={<Admin />} roles={['admin']} />} />
          <Route path="/user" element={<ProtectedRoute element={<User />} roles={['user']} />} />
          <Route path="/" element={<Home />} />
         
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
