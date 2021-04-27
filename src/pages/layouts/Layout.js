import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="bg-light">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
