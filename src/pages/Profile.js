import Layout from './layouts/Layout';
import MenuItem from '../components/MenuItem';

import { useAuth } from '../contexts/AuthContext';

import maleAvatar from '../assets/images/avatars/av-default-male.svg';
import Spacer from '../components/Spacer';

const Avatar = ({ src }) => {
  return (
    <>
      <img className="rounded-full m-auto" src={src} alt="" />
    </>
  );
};

const Button = ({ children, linkTo, className }) => {
  return (
    <a href={linkTo || '#'} className={'btn inline-block ' + className}>
      {children}
    </a>
  );
};

const UserItems = () => {
  return (
    <article className="flex flex-col">
      <Avatar src={maleAvatar} />
      <Spacer y={1} />
      <Button className="m-auto">Change avatar</Button>
      <Spacer y={1} />
      <ul className="flex flex-col items-center">
        <MenuItem isDropdown menuItemList={<li>I am a li</li>}>
          Created Recipes
        </MenuItem>
        <MenuItem isDropdown menuItemList={<li>I am a li</li>}>
          Favorite Recipes
        </MenuItem>
      </ul>
    </article>
  );
};

const Profile = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <h2 className="text-center text-lg p-4">Hello, {user.username}</h2>

      <UserItems />
    </Layout>
  );
};

export default Profile;
