import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import userAvatar from '../assets/images/avatars/av-0.svg';
import {
  MdSettings,
  MdContentPaste,
  MdTimer,
  MdInput,
  MdFavoriteBorder,
  MdExpandMore,
} from 'react-icons/md';

import { useAuth } from '../contexts/AuthContext';

const Sidebar = ({ history }) => {
  const [favoriteMenuOpened, setFavoriteMenuOpened] = useState(false);
  const { logout, updateUser } = useAuth();

  const handler = (e) => {
    e.preventDefault();
    if (favoriteMenuOpened) {
      setFavoriteMenuOpened(false);
    } else {
      setFavoriteMenuOpened(true);
    }
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    logout().then(() => {
      updateUser();
      history.push('/');
    });
  };

  return (
    <nav className="text-dark hidden md:block shadow flex flex-col p-4">
      <IconContext.Provider value={{ style: { marginRight: '0.5rem' } }}>
        <header>
          <h2 className="text-center text-xl font-bold pb-2">Username</h2>
          <img
            src={userAvatar}
            className="rounded-full m-auto w-3/6 py-4"
            alt="User avatar"
          />
          <hr />
        </header>
        <section>
          <a
            href="/stopwatch"
            className="flex items-center p-2 hover:bg-primary"
          >
            <MdTimer /> Stopwatch
          </a>

          <a href="/journal" className="flex items-center p-2 hover:bg-primary">
            <MdContentPaste /> Food Journal
          </a>
          <a
            href="/settings"
            className="flex items-center p-2 hover:bg-primary"
          >
            <MdSettings /> Settings
          </a>
          <a
            href="/favorites"
            onClick={handler}
            className="flex items-center p-2 hover:bg-primary cursor-pointer"
          >
            <MdFavoriteBorder /> Favorite Recipes
            <MdExpandMore className="ml-2" />
          </a>
          {favoriteMenuOpened ? (
            <ul className="flex flex-col items-center max-w-fit-content">
              <li className="text-dark hover:text-dark text-center">
                <a href="/placeholder">On this page we’ve learned about</a>
              </li>
              <li className="text-dark hover:text-dark text-center">
                <a href="/placeholder">On this page we’ve learned about</a>
              </li>
              <li className="text-dark hover:text-dark text-center">
                <a href="/placeholder">On this page we’ve learned about</a>
              </li>
              <li className="text-dark hover:text-dark text-center">
                <a href="/placeholder">On this page we’ve learned about</a>
              </li>
              <li className="text-dark hover:text-dark text-center">
                <a href="/placeholder">On this page we’ve learned about</a>
              </li>
            </ul>
          ) : null}
        </section>
        <hr />
        <footer>
          <a
            href="/logout"
            className="flex items-center justify-center p-2 hover:bg-primary"
            onClick={logoutHandler}
          >
            <MdInput /> Logout
          </a>
        </footer>
      </IconContext.Provider>
    </nav>
  );
};

export default withRouter(Sidebar);
