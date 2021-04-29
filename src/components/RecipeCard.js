const RecipeCard = ({
  category,
  creationDate,
  description,
  image,
  ingredients,
  instructions,
  tags,
  title,
  _id,
}) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-main h-full p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={image}
          alt="content"
        />
        <h3 className="tracking-widest text-dark text-xs font-medium title-font">
          {creationDate}
        </h3>
        <h2 className="text-lg text-dark font-medium title-font mb-4">
          {title}
        </h2>
        <p className="leading-relaxed text-base text-accentDark">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
