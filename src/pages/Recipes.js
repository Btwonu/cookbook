import { useState, useEffect } from 'react';

import HolyGrail from './layouts/HolyGrail';
import RecipeCard from '../components/RecipeCard';
import Sidebar from '../components/Sidebar';
import Aside from '../components/Aside';
import recipeService from '../services/recipeService';

import { useAuth } from '../contexts/AuthContext';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { user } = useAuth();

  console.log({ user });
  useEffect(() => {
    recipeService
      .getAll()
      .then((res) => {
        setRecipes(res.data);
      })
      .catch(console.error);
  }, []);

  const recipeList = recipes.map((recipe) => (
    <RecipeCard key={recipe._id} recipeId={recipe._id} {...recipe} />
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
