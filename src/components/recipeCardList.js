import RecipeCard from './RecipeCard';

const RecipeCardList = (props) => {
  return (
    <div className="flex flex-wrap m-4">
      {props.recipes.map((recipe) => (
        <RecipeCard key={recipe._id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeCardList;
