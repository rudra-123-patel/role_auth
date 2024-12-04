import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

const Home = () => {
  const navigate = useNavigate(); 

  const handleLoginRedirect = () => {
    navigate('/login'); 
  };

  return (
    <div className="home-container">
      <h1 className="heading">Welcome to My Home Page</h1>
      <button className="button" onClick={handleLoginRedirect}>
        Click Me to Login
      </button>
    </div>
  );
};

export default Home;
