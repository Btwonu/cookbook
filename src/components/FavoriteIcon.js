import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';

import axios from 'axios';

const FavoriteIcon = ({ recipeId }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const addToFavorites = (e) => {
    e.preventDefault();
    console.log('adding..');

    axios({ method: 'POST', url: `/favorites/${recipeId}` })
      .then((res) => {
        console.log(res.data);
        setIsFavorited(true);
      })
      .catch(console.error);
  };

  const removeFromFavorites = (e) => {
    e.preventDefault();
    console.log('removing..');
    axios({ method: 'DELETE', url: `/favorites/${recipeId}` })
      .then((res) => {
        console.log(res.data);
        setIsFavorited(false);
      })
      .catch(console.error);
  };

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
