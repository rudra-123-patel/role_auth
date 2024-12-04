import React, { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
  
    const validCredentials = {
      admin: { username: 'admin', password: 'admin123', role: 'admin' },
      user: { username: 'user', password: 'user123', role: 'user' },
    };

    if (
      (userData.username === validCredentials.admin.username &&
        userData.password === validCredentials.admin.password &&
        userData.role === 'admin') ||
      (userData.username === validCredentials.user.username &&
        userData.password === validCredentials.user.password &&
        userData.role === 'user')
    ) {
      setUser(userData); 
    } else {
      alert('Invalid credentials or role!');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
