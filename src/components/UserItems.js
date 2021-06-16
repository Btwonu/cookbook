import Button from './Button';
import Spacer from './Spacer';
import Avatar from './Avatar';
import MenuItem from './MenuItem';
import maleAvatar from '../assets/images/avatars/av-default-male.svg';

const UserItems = ({ favoriteRecipeList, openModalHandler }) => {
  return (
    <article className="flex flex-col">
      <div className="h-24 inline-block">
        <Avatar src={maleAvatar} />
      </div>
      <Spacer y={1} />
      <Button className="m-auto" onClick={openModalHandler}>
        Change avatar
      </Button>
      <Spacer y={1} />
      <ul className="flex flex-col items-center">
        <MenuItem isDropdown menuItemList={<></>}>
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
