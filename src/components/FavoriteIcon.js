import { IconContext } from 'react-icons';
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';

const FavoriteIcon = ({ isFavorited, addToFavorites, removeFromFavorites }) => {
  return (
    <button className="active:outline-none focus:outline-none">
      <IconContext.Provider
        value={{
          className: 'text-3xl mx-auto cursor-pointer text-accent',
          cursor: 'pointer',
        }}
      >
        {isFavorited ? (
          <MdFavorite onClick={removeFromFavorites} />
        ) : (
          <MdFavoriteBorder onClick={addToFavorites} />
        )}
      </IconContext.Provider>
    </button>
  );
};

export default FavoriteIcon;
