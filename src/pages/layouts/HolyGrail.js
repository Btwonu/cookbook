import Header from '../../components/Header';

const HolyGrail = (props) => {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-light">{props.children}</div>
    </>
  );
};

export default HolyGrail;
