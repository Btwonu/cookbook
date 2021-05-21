import { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    updateUser();
  }, []);

  const updateUser = () => {
    return axios
      .get('/auth/')
      .then((res) => {
        setUser(res.data);
      })
      .catch(console.error);
  };

  const login = (username, password) => {
    return axios({
      method: 'POST',
      url: '/auth/login',
      data: { username, password },
    })
      .then((res) => {
        console.log('Logged in through form');
      })
      .catch(console.error);
  };

  const contextValue = {
    user,
    setUser,
    login,
    updateUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
