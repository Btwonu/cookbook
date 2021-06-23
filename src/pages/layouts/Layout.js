import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layout = (props) => {
  return (
    <div className="layout h-screen">
      <Header />
      <div className="bg-light">
        <main className="container mx-auto h-full">{props.children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
