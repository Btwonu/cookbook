import Button from './Button';
import Spacer from './Spacer';
import Avatar from './Avatar';
import MenuItem from './MenuItem';

const UserItems = ({
  avatarSrc,
  favoriteRecipeList,
  createdRecipeList,
  openModalHandler,
}) => {
  return (
    <article className="flex flex-col items-center">
      <div className="h-24 inline-block">
        <Avatar src={avatarSrc} />
      </div>
      <Spacer y={1} />
      <Button className="m-auto" onClick={openModalHandler}>
        Change avatar
      </Button>
      <Spacer y={1} />
      <ul className="flex flex-col items-center justify-center">
        <MenuItem isDropdown menuItemList={createdRecipeList}>
          Created Recipes
        </MenuItem>
        <MenuItem isDropdown menuItemList={favoriteRecipeList}>
          Favorite Recipes
        </MenuItem>
      </ul>
    </article>
  );
};

export default UserItems;
