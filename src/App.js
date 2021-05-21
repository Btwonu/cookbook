import { useAuth } from './contexts/AuthContext';
import axios from 'axios';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './routes';

if (process.env.NODE_ENV === 'development') {
  console.log(process.env.NODE_ENV);
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = 'http://localhost:5000';
} else if (process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV);
}

const App = () => {
  const { user } = useAuth();
  console.log({ user });

  return user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default App;
