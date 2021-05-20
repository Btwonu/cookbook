import { createContext, useEffect, useState, useContext } from 'react';

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const getUser = () => sleep(3000).then(() => ({ username: 'elmo' }));

export const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    status: 'pending',
    error: null,
    user: null,
  });

  useEffect(() => {
    getUser().then((user) =>
      setState({ status: 'success', error: null, user })
    );
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {state.status === 'pending' ? (
        'Loading...'
      ) : state.status === 'error' ? (
        <div>Error'ed</div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
