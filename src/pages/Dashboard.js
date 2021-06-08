import Layout from './layouts/Layout';

import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  console.log(user);
  return <Layout>Dashboard</Layout>;
};

export default Dashboard;
