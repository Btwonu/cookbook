import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-main text-dark">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <Link
            to="/"
            className="ml-3 text-xl hover:text-accentDark cursor-pointer"
          >
            Cookbook
          </Link>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-accentDark cursor-pointer">
            Home
          </Link>
          <Link
            to="/recipes"
            className="mr-5 hover:text-accentDark cursor-pointer"
          >
            Recipes
          </Link>
          <Link
            to="/about"
            className="mr-5 hover:text-accentDark cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/dashboard"
            className="mr-5 hover:text-accentDark cursor-pointer"
          >
            Dashboard
          </Link>
          <Link
            to="/holy"
            className="mr-5 hover:text-accentDark cursor-pointer"
          >
            Holy
          </Link>
        </nav>
        <button className="inline-flex items-center bg-dark border-0 py-1 px-3 focus:outline-none hover:bg-accentDark rounded text-base text-light mt-4 md:mt-0">
          Login
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
