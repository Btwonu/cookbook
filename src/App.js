import { useAuth } from './contexts/AuthContext';
import axios from 'axios';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './routes';

// import Spinner from 'react-spinkit';

if (process.env.NODE_ENV === 'development') {
  console.log(process.env.NODE_ENV);
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = 'http://localhost:5000';
} else if (process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV);
}

const App = () => {
  const { user } = useAuth();

  return user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default App;

// refactor user loading
// if (user) {
//   return <AuthenticatedRoutes />;
// } else {
//   console.log({ userIsLoading });
//   return userIsLoading ? (
//     <Spinner
//       className="relative left-1/2 top-1/4"
//       name="ball-scale-ripple-multiple"
//       color="var(--color-accent)"
//     />
//   ) : (
//     <UnauthenticatedRoutes />
//   );
// }
