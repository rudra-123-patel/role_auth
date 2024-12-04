import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/');
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>  
        </li>

        {/* Show Admin link only if user is admin */}
        {user && user.role === 'admin' && (
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
        )}

        {/* Show User link only if user is user */}
        {user && user.role === 'user' && (
          <li>
            <Link to="/user">User Page</Link>
          </li>
        )}

        {/* Show login link if not logged in */}
        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

        
      </ul>
    </nav>
  );
};

export default Navbar;
