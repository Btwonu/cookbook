import { useState, useEffect } from 'react';

import HolyGrail from './layouts/HolyGrail';
import RecipeCard from '../components/RecipeCard';
import RecipeCardList from '../components/recipeCardList';
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
import { Link } from 'react-router-dom';

import recipeService from '../services/recipeService';

const Main = () => {
  const [favoriteMenuOpened, setFavoriteMenuOpened] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handler = (e) => {
    e.preventDefault();
    if (favoriteMenuOpened) {
      setFavoriteMenuOpened(false);
    } else {
      setFavoriteMenuOpened(true);
    }
  };

  useEffect(() => {
    recipeService.getAll().then((data) => {
      setRecipes(data);
    });
  }, []);

  return (
    <HolyGrail>
      <main className="flex">
        <nav className=" hidden md:block shadow flex flex-col p-4">
          <IconContext.Provider value={{ style: { marginRight: '0.5rem' } }}>
            <header>
              <h2 className="text-center text-xl font-bold pb-2">Username</h2>
              <img
                src={userAvatar}
                className="rounded-full m-auto w-3/6 py-4"
              />
              <hr />
            </header>
            <section>
              <a href="#" className="flex items-center p-2 hover:bg-primary">
                <MdTimer /> Stopwatch
              </a>

              <a href="#" className="flex items-center p-2 hover:bg-primary">
                <MdContentPaste /> Food Journal
              </a>
              <a href="#" className="flex items-center p-2 hover:bg-primary">
                <MdSettings /> Settings
              </a>
              <a
                onClick={handler}
                className="flex items-center p-2 hover:bg-primary cursor-pointer"
              >
                <MdFavoriteBorder /> Favorite Recipes
                <MdExpandMore className="ml-2" />
              </a>
              {favoriteMenuOpened ? (
                <ul className="flex flex-col items-center max-w-fit-content">
                  <li className="text-dark hover:text-dark text-center">
                    <a href="#">On this page we’ve learned about</a>
                  </li>
                  <li className="text-dark hover:text-dark text-center">
                    <a href="#">On this page we’ve learned about</a>
                  </li>
                  <li className="text-dark hover:text-dark text-center">
                    <a href="#">On this page we’ve learned about</a>
                  </li>
                  <li className="text-dark hover:text-dark text-center">
                    <a href="#">On this page we’ve learned about</a>
                  </li>
                  <li className="text-dark hover:text-dark text-center">
                    <a href="#">On this page we’ve learned about</a>
                  </li>
                </ul>
              ) : null}
            </section>
            <hr />
            <footer>
              <a
                href="#"
                className="flex items-center justify-center p-2 hover:bg-primary"
              >
                <MdInput /> Logout
              </a>
            </footer>
          </IconContext.Provider>
        </nav>

        <article className="flex-1">
          {recipes ? <RecipeCardList recipes={recipes} /> : null}
        </article>
      </main>
    </HolyGrail>
  );
};

export default Main;
