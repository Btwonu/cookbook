import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

import { useAuth } from '../../contexts/AuthContext';

const SidebarLayout = (props) => {
  const { user } = useAuth();

  return (
    <div className="layout h-screen">
      <Header />
      <div className="bg-light md:flex p-4">
        <aside className="md:w-1/2 lg:w-1/3">{user ? <Sidebar /> : null}</aside>
        <main className="container mx-auto md:h-full shadow">
          {props.children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SidebarLayout;
