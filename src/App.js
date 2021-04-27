import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './css/main.scss';
import { Helmet } from 'react-helmet';
import Layout from './components/layout/Layout';

import heroImage from './assets/images/baker-amico.svg';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/holy" component={Holy} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

function Holy() {
  return <>Hello</>;
}

function Landing() {
  return (
    <>
      {/* Hero */}
      <section className="text-accentDark">
        <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-dark">
              Organize your recipes
            </h1>
            <p className="mb-8 leading-relaxed">
              Keep track of your favorite recipes, find new ones, communicate
              with other chefs and more.
            </p>
            <div className="flex justify-center w-full">
              <Link
                to="/register"
                className="inline-flex text-light bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-accentLight rounded text-lg cursor-pointer"
              >
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
      <section className="text-dark bg-main">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4"></div>
        </div>
      </section>
    </>
  );
}

function Register() {
  return (
    <main>
      <h2>Register</h2>
    </main>
  );
}

function Card() {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-mainDark p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src="https://dummyimage.com/720x400"
          alt="content"
        />
        <h3 className="tracking-widest text-dark text-xs font-medium title-font">
          SUBTITLE
        </h3>
        <h2 className="text-lg text-dark font-medium title-font mb-4">
          Chichen Itza
        </h2>
        <p className="leading-relaxed text-base text-accentDark">
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche.
        </p>
      </div>
    </div>
  );
}

export default App;
