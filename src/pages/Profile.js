import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Layout from './layouts/Layout';

import UserItems from '../components/UserItems';
import Modal from '../components/Modal';
import AvatarList from '../components/AvatarList';

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
      <Modal isOpened={modalIsOpened} closeHandler={closeModal}>
        <section className="flex flex-wrap items content-start w-full h-full">
          <AvatarList />
        </section>
      </Modal>

      <h2 className="text-center text-lg p-4">Hello, {user.username}</h2>
      <UserItems
        openModalHandler={openModal}
        favoriteRecipeList={userFavoriteRecipeList}
      />
    </Layout>
  );
};

export default Profile;
