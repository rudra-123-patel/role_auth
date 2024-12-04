import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';  
import { useNavigate } from 'react-router-dom';  
import "../App.css"

const Login = () => {
  const { login, user } = useAuth();  
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [role, setRole] = useState('user'); 
  const navigate = useNavigate();  

 
  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin');  
      } else if (user.role === 'user') {
        navigate('/user');  
      }
    }
  }, [user, navigate]); 

  const handleLogin = () => {
    if (username && password) {
  
      login({ username, password, role });
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        
        <div className="role-selection">
          <label>
            <input
              type="radio"
              value="user"
              checked={role === 'user'}
              onChange={(e) => setRole(e.target.value)}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              value="admin"
              checked={role === 'admin'}
              onChange={(e) => setRole(e.target.value)}
            />
            Admin
          </label>
        </div>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
