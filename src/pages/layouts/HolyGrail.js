import Header from '../../components/Header';

const HolyGrail = (props) => {
  return (
    <>
      <Header />
      <div className="">
        <div className="bg-light max-w-screen-xl mx-auto mt-4 md:grid md:grid-cols-grail-md xl:grid-cols-grail-xl gap-1">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default HolyGrail;
