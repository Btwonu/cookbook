import placeholderImage from '../assets/images/recipe-placeholder.jpg';
import FavoriteIcon from './FavoriteIcon';

const RecipeCard = ({ recipeId, header, imageUrl, creator, summary }) => {
  return (
    <article className="lg:w-1/2 p-4">
      <a
        href={`/recipes/${recipeId}`}
        className="block bg-main h-full flex flex-col justify-between border p-6 rounded-lg cursor-default hover:underline"
      >
        {imageUrl ? (
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={imageUrl}
            alt="A recipe"
          />
        ) : (
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={placeholderImage}
            alt="A recipe"
          />
        )}

        {/* <h3 className="tracking-widest text-dark text-xs font-medium title-font">
          Sub Heading
        </h3> */}
        <h2 className="text-lg text-dark font-medium title-font mb-6">
          {header}
        </h2>
        <p className="text-dark mb-4">
          {summary && summary.slice(0, 60) + '...'}
        </p>
        <p className="creator text-dark flex justify-between gap-4">
          by chef <span className="font-semibold flex-grow">{creator}</span>
          <FavoriteIcon recipeId={recipeId} />
        </p>
      </a>
    </article>
  );
};

export default RecipeCard;
