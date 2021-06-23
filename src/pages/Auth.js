import { useAuth } from '../contexts/AuthContext';

import AuthForm from '../components/Auth/AuthForm';
import Layout from './layouts/Layout';
import Spinner from 'react-spinkit';

const Auth = () => {
  const { userIsLoading } = useAuth();

  return (
    <Layout>
      {userIsLoading ? (
        <Spinner
          className="relative left-1/2 top-1/4"
          name="ball-scale-ripple-multiple"
          color="var(--color-accent)"
        />
      ) : (
        <AuthForm />
      )}
    </Layout>
  );
};

export default Auth;
