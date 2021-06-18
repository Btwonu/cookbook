import { useState, useEffect } from 'react';

import HolyGrail from './layouts/HolyGrail';
import RecipeCard from '../components/RecipeCard';
import Sidebar from '../components/Sidebar';
import Aside from '../components/Aside';
import recipeService from '../services/recipeService';
import Spinner from 'react-spinkit';

import { useAuth } from '../contexts/AuthContext';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    setIsLoading(true);

    recipeService
      .getAll()
      .then((res) => {
        setRecipes(res.data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  const recipeList = recipes.map((recipe) => {
    let isFavorited = user.favoriteRecipes.some(
      (favRecipe) => favRecipe._id === recipe._id
    );

    return (
      <RecipeCard
        key={recipe._id}
        recipeId={recipe._id}
        favorite={isFavorited}
        {...recipe}
      />
    );
  });

  return (
    <HolyGrail>
      <Sidebar />
      <main className="flex flex-wrap m-4 shadow">
        {isLoading ? (
          <Spinner
            className="relative left-1/2 top-1/4"
            name="ball-scale-ripple-multiple"
            color="var(--color-accent)"
          />
        ) : recipes ? (
          recipeList
        ) : null}
      </main>
      <Aside />
    </HolyGrail>
  );
};

export default Recipes;
