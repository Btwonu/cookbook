import { useAuth } from './contexts/AuthContext';
import axios from 'axios';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './routes';

axios.defaults.withCredentials = true;
if (process.env.NODE_ENV === 'development') {
  console.log(process.env.NODE_ENV);
  axios.defaults.baseURL = 'http://localhost:5000/api/';
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://cookerbook.herokuapp.com/api/';
  console.log(process.env.NODE_ENV);
}

const App = () => {
  const { user } = useAuth();

  return user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default App;
