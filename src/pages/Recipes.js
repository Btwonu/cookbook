import { useState, useEffect } from 'react';

import HolyGrail from './layouts/HolyGrail';
import RecipeCardList from '../components/recipeCardList';
import Sidebar from '../components/Sidebar';
import recipeService from '../services/recipeService';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService
      .getAll()
      .then((res) => {
        setRecipes(res.data);
      })
      .catch(console.error);
  }, []);

  return (
    <HolyGrail>
      <main className="flex">
        <Sidebar />
        <article className="flex-1">
          {recipes ? <RecipeCardList recipes={recipes} /> : null}
        </article>
      </main>
    </HolyGrail>
  );
};

export default Recipes;
