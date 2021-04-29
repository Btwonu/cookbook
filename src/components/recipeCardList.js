import RecipeCard from './RecipeCard';

const RecipeCardList = (props) => {
  return (
    <div className="flex flex-wrap m-4">
      {props.recipes.map((recipe) => (
        <RecipeCard {...recipe} />
      ))}
    </div>
  );
};

export default RecipeCardList;
