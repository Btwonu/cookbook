import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';

import { useAuth } from '../contexts/AuthContext';
import { useSidebar } from '../contexts/SidebarContext';

import MenuItem from './MenuItem';
import Spinner from 'react-spinkit';
import Avatar from './Avatar';
import {
  MdContentPaste,
  MdTimer,
  MdInput,
  MdFavoriteBorder,
  MdAdd,
} from 'react-icons/md';

const Sidebar = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, logout, updateUser } = useAuth();
  const { isOpened } = useSidebar();

  const logoutHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    logout().then(() => {
      updateUser().then((r) => {
        setIsLoading(false);
        history.push('/');
      });
    });
  };

  const userFavoriteRecipeList = user.favoriteRecipes.map(({ _id, title }) => (
    <li key={_id} className="leading-8 hover:underline">
      <a href={`/recipes/${_id}`}>{title}</a>
    </li>
  ));

  let navClasses = 'md:block flex flex-col p-4';

  return (
    <nav className={isOpened ? navClasses : 'hidden ' + navClasses}>
      <IconContext.Provider value={{ style: { marginRight: '0.5rem' } }}>
        <header>
          <h2 className="text-center text-xl font-bold pb-2">
            {user.username}
          </h2>
          <p className="w-2/5 sm:w-1/5 md:w-2/5 lg:w-3/5 p-2 m-auto">
            <Avatar src={user.avatar.url} />
          </p>
        </header>
        <hr className="w-5/6 m-auto lg:w-full" />
        <section>
          <ul className="w-5/6 relative md:inline-block lg:w-full left-1/2 transform -translate-x-1/2">
            <MenuItem linkTo="/timer">
              <MdTimer />
              Timer
            </MenuItem>

            <MenuItem linkTo="/shopping">
              <MdContentPaste />
              Shopping List
            </MenuItem>

            <MenuItem linkTo="/recipes/create">
              <MdAdd />
              Create Recipe
            </MenuItem>
            <MenuItem
              linkTo="/"
              isDropdown
              menuItemList={userFavoriteRecipeList}
            >
              <MdFavoriteBorder />
              Favorite Recipes
            </MenuItem>
          </ul>
        </section>
        <hr className="w-5/6 m-auto lg:w-full" />
        <footer>
          {isLoading ? (
            <Spinner
              overrideSpinnerClassName="h-12 text-accent left-1/2 transform translate-y-1/3"
              name="ball-scale-ripple-multiple"
            />
          ) : (
            <a
              href="/logout"
              className="flex items-center justify-center p-2 hover:bg-primary"
              onClick={logoutHandler}
            >
              <MdInput /> Logout
            </a>
          )}
        </footer>
      </IconContext.Provider>
    </nav>
  );
};

export default withRouter(Sidebar);
