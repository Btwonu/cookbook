import HolyGrail from './layouts/HolyGrail';
import RecipeCard from '../components/RecipeCard';

const Main = () => {
  return (
    <HolyGrail>
      <main className="flex flex-row flex-grow">
        <nav className="w-4/5 shadow flex-col p-4">
          <header>
            <h2>Username</h2>
          </header>
          <section>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
          </section>
          <footer>
            <p>Footer</p>
          </footer>
        </nav>
        <article className="flex-grow">
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
        <aside className="w-4/5 shadow p-4">
          <p>This is the aside</p>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
          <p>
            Mozzarella cheese slices cheese triangles. Chalk and cheese cut the
            cheese cheese and wine cheesy feet blue castello pepper jack gouda
            queso. Croque monsieur bocconcini stinking bishop dolcelatte
            halloumi cream cheese smelly cheese st. agur blue cheese. Mozzarella
            camembert de normandie.
          </p>
        </aside>
      </main>
    </HolyGrail>
  );
};

export default Main;
