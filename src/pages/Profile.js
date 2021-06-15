import { useState } from 'react';
import Layout from './layouts/Layout';
import MenuItem from '../components/MenuItem';

import { useAuth } from '../contexts/AuthContext';

import maleAvatar from '../assets/images/avatars/av-default-male.svg';
import Spacer from '../components/Spacer';
import Modal from '../components/Modal';

import { MdClose } from 'react-icons/md';

const Avatar = ({ src }) => {
  return (
    <>
      <img className="rounded-full m-auto" src={src} alt="" />
    </>
  );
};

const Button = ({ children, linkTo, className, onClick }) => {
  return (
    <a
      href={linkTo || '#'}
      className={'btn inline-block ' + className}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

const UserItems = ({ favoriteRecipeList, openModalHandler }) => {
  return (
    <article className="flex flex-col">
      <Avatar src={maleAvatar} />
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

const Profile = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const { user } = useAuth();

  const openModal = (e) => {
    e.preventDefault();
    setModalIsOpened(true);
  };

  const closeModal = () => {
    setModalIsOpened(false);
  };

  const userFavoriteRecipeList = user.favoriteRecipes.map(({ _id, title }) => (
    <li key={_id} className="leading-8 hover:underline">
      <a href={`/recipes/${_id}`}>{title}</a>
    </li>
  ));

  return (
    <Layout>
      <Modal isOpened={modalIsOpened} closeHandler={closeModal}></Modal>
      <h2 className="text-center text-lg p-4">Hello, {user.username}</h2>

      <UserItems
        openModalHandler={openModal}
        favoriteRecipeList={userFavoriteRecipeList}
      />
    </Layout>
  );
};

export default Profile;
