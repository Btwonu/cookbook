import Layout from './layouts/Layout';

import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <h2 className="text-center text-lg p-4">Hello, {user.username}</h2>
    </Layout>
  );
};

export default Dashboard;
