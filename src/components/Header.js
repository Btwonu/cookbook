import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

const Header = () => {
  return (
    <header className="bg-primary text-dark">
      <div className="container mx-auto flex p-5  items-center">
        <MdMenu className="cursor-pointer text-2xl md:invisible" />
        <a className="flex title-font font-medium items-center">
          <Link
            to="/"
            className="ml-3 text-xl hover:text-secondary cursor-pointer"
          >
            Cookbook
          </Link>
        </a>

        <nav className="mx-auto flex flex-wrap items-center text-base justify-center">
          {/* <Link to="/" className="mr-5 hover:text-accentDark cursor-pointer">
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
          </Link> */}
        </nav>

        <button className="inline-flex items-center bg-secondary border-0 py-1 px-3 focus:outline-none hover:bg-secondaryHovered rounded text-base text-light">
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
