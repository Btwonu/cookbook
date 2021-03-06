import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

import { useAuth } from '../../contexts/AuthContext';

const Layout = (props) => {
  const { user } = useAuth();

  return (
    <div className="layout h-screen">
      <Header />
      <div className="bg-light">
        <main className="container mx-auto">{props.children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
