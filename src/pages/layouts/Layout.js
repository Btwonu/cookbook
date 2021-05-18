import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layout = (props) => {
  return (
    <div className="layout h-screen">
      <Header />
      <div className="bg-light">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
