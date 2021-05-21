import { Link } from 'react-router-dom';
import Layout from './layouts/Layout';
import heroImage from '../assets/images/baker-amico.svg';
// import { useAuth } from '../contexts/AuthContext';

const Landing = () => {
  // const { user } = useAuth();

  return (
    <Layout>
      {/* Hero */}
      <section className="text-dark pt-24">
        <div className="container mx-auto flex px-16  md:flex-row flex-col items-center">
          <div className=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-dark">
              Organize your recipes
            </h1>
            <p className="mb-8">
              Keep track of your favorite recipes, find new ones, communicate
              with other chefs and more.
            </p>
            <div className="flex justify-center w-full">
              <Link to="/auth" className="btn">
                Sign up now
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroImage}
            />
          </div>
        </div>
      </section>

      {/* Main */}
      {/* <section className="text-dark bg-primary">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4"></div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Landing;
