import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './css/main.scss';
import Layout from './pages/layouts/Layout';
import { ThemeProvider } from './contexts/ThemeContext';

import heroImage from './assets/images/baker-amico.svg';

import Main from './pages/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/holy" component={Main} />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
};

function Landing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="text-dark">
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
                className="inline-flex text-light bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-accentHovered rounded text-lg cursor-pointer"
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
      <section className="text-dark bg-primary">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4"></div>
        </div>
      </section>
    </Layout>
  );
}

function Register() {
  return (
    <main>
      <h2>Register</h2>
    </main>
  );
}

export default App;
