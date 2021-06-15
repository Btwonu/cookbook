import { withRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import userAvatar from '../assets/images/avatars/av-0.svg';
import {
  MdSettings,
  MdContentPaste,
  MdTimer,
  MdInput,
  MdFavoriteBorder,
  MdAdd,
} from 'react-icons/md';
import MenuItem from './MenuItem';

import { useAuth } from '../contexts/AuthContext';
import { useSidebar } from '../contexts/SidebarContext';

const Sidebar = ({ history }) => {
  const { user, logout, updateUser } = useAuth();
  const { isOpened } = useSidebar();

  const logoutHandler = (e) => {
    e.preventDefault();
    logout().then(() => {
      updateUser();
      history.push('/');
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
          <img
            src={userAvatar}
            className="rounded-full m-auto w-3/6 py-4"
            alt="User avatar"
          />
          <hr />
        </header>
        <section>
          <ul className="relative inline-block left-1/2 transform -translate-x-1/2">
            <MenuItem linkTo="/stopwatch">
              <MdTimer />
              Stopwatch
            </MenuItem>

            <MenuItem linkTo="/journal">
              <MdContentPaste />
              Food Journal
            </MenuItem>

            <MenuItem linkTo="/settings">
              <MdSettings />
              Settings
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
