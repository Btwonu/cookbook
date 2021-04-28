import HolyGrail from './layouts/HolyGrail';
import RecipeCard from '../components/RecipeCard';
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

const Main = () => {
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
              <a href="#" className="flex items-center p-2 hover:bg-main">
                <MdTimer /> Stopwatch
              </a>

              <a href="#" className="flex items-center p-2 hover:bg-main">
                <MdContentPaste /> Food Journal
              </a>
              <a href="#" className="flex items-center p-2 hover:bg-main">
                <MdSettings /> Settings
              </a>
              <a href="#" className="flex items-center p-2 hover:bg-main">
                <MdFavoriteBorder /> Favorite Recipes
                <MdExpandMore className="ml-2" />
              </a>
            </section>
            <hr />
            <footer>
              <a
                href="#"
                className="flex items-center justify-center p-2 hover:bg-main"
              >
                <MdInput /> Logout
              </a>
            </footer>
          </IconContext.Provider>
        </nav>

        <article className="flex-1">
          <div className="flex flex-wrap m-4">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        </article>
      </main>
    </HolyGrail>
  );
};

export default Main;
