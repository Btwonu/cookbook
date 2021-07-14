import { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);

  console.log({ user });

  useEffect(() => {
    setUserLoading(true);

    updateUser().then((r) => {
      setUserLoading(false);
    });
  }, []);

  const updateUser = () => {
    return axios
      .get('/auth')
      .then((res) => {
        setUser(res.data);
        return res.data;
      })
      .catch((err) => {
        console.error(err);
        setUser(null);
      });
  };

  const login = (username, password) => {
    const data = { username, password };

    return axios({
      method: 'POST',
      url: '/auth/login',
      data,
    })
      .then((res) => {
        console.log('Logged in through form');
      })
      .catch(console.error);
  };

  const logout = () => {
    return axios.get('/auth/logout');
  };

  const register = (username, email, password, confirmPassword) => {
    const data = { username, email, password, confirmPassword };

    return axios({
      method: 'POST',
      url: '/auth/register',
      data,
    })
      .then((res) => {
        console.log('Registered through form');
      })
      .catch(console.error);
  };

  const contextValue = {
    user,
    userLoading,
    setUser,
    updateUser,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
