import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

import ThemeToggle from './ThemeToggle/ThemeToggle';

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="bg-primary text-dark">
      <div className="container mx-auto flex p-5  items-center">
        <MdMenu className="cursor-pointer text-2xl md:invisible" />
        <Link
          to="/"
          className="title-font font-medium ml-3 text-xl hover:text-secondary cursor-pointer"
        >
          Cookbook
        </Link>

        <nav className="mx-auto flex flex-wrap items-center text-base justify-center">
          {user && (
            <>
              <Link
                to="/"
                className="mr-5 hover:text-accentDark cursor-pointer"
              >
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
            </>
          )}
        </nav>

        {user ? (
          <ThemeToggle />
        ) : (
          <Link
            to="/auth"
            className="inline-flex items-center bg-secondary border-0 py-1 px-3 focus:outline-none hover:bg-secondaryHovered rounded text-base text-light"
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
