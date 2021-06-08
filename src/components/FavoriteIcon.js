import { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';

const FavoriteIcon = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button className="active:outline-none focus:outline-none">
      <IconContext.Provider
        value={{
          className: 'text-3xl mx-auto cursor-pointer text-accent',
          cursor: 'pointer',
        }}
      >
        {isClicked ? (
          <MdFavorite onClick={onClickHandler} />
        ) : (
          <MdFavoriteBorder onClick={onClickHandler} />
        )}
      </IconContext.Provider>
    </button>
  );
};

export default FavoriteIcon;
