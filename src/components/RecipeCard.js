const RecipeCard = () => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-main p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src="https://dummyimage.com/720x400"
          alt="content"
        />
        <h3 className="tracking-widest text-dark text-xs font-medium title-font">
          SUBTITLE
        </h3>
        <h2 className="text-lg text-dark font-medium title-font mb-4">
          Chichen Itza
        </h2>
        <p className="leading-relaxed text-base text-accentDark">
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche.
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
