import { useState, useEffect } from 'react';

import HolyGrail from './layouts/HolyGrail';
import RecipeCard from '../components/RecipeCard';
import Sidebar from '../components/Sidebar';
import Aside from '../components/Aside';
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

  const recipeList = recipes.map((recipe) => (
    <RecipeCard key={recipe._id} {...recipe} />
  ));

  return (
    <HolyGrail>
      <Sidebar />
      <main className="flex flex-wrap m-4 shadow">
        {recipes ? recipeList : null}
      </main>
      <Aside />
    </HolyGrail>
  );
};

export default Recipes;
