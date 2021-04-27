import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HolyGrail = (props) => {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-light">{props.children}</div>
      <Footer />
    </>
  );
};

export default HolyGrail;
