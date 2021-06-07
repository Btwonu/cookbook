import placeholderImage from '../assets/images/recipe-placeholder.jpg';

const RecipeCard = ({ header, imageUrl, creator, summary }) => {
  return (
    <article className="lg:w-1/2 p-4">
      <a
        href="#"
        className="block bg-main h-full relative border p-6 rounded-lg"
      >
        {imageUrl ? (
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={imageUrl}
            alt="A recipe image"
          />
        ) : (
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={placeholderImage}
            alt="A recipe image"
          />
        )}

        {/* <h3 className="tracking-widest text-dark text-xs font-medium title-font">
          Sub Heading
        </h3> */}
        <h2 className="text-lg text-dark font-medium title-font mb-4">
          {header}
        </h2>
        <p className="leading-relaxed text-base text-dark">
          {summary && summary.slice(0, 60) + '...'}
        </p>
        <div className="absolute bottom-6 left-6 text-dark">
          <p className="creator">
            by chef <span className="font-semibold">{creator}</span>
          </p>
        </div>
      </a>
    </article>
  );
};

export default RecipeCard;
