import { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuth } from '../contexts/AuthContext';

import AvatarList from './AvatarList';
import Button from './Button';

const AvatarPicker = () => {
  const [avatarList, setAvatarList] = useState([]);
  const [activeAvatar, setActiveAvatar] = useState(0);
  const { user, updateUser } = useAuth();

  useEffect(() => {
    axios('/images/avatars')
      .then((res) => setAvatarList(res.data.resources))
      .catch(console.error);
  }, []);

  const activationHandler = (index) => {
    setActiveAvatar(index);
  };

  const pickAvatar = () => {
    const pickedIndex = activeAvatar;
    const { public_id: publicId, url } = avatarList[pickedIndex];
    const { id: userId, username } = user;

    // store avatar data to db
    axios({
      method: 'POST',
      url: `/users/${username}/avatar`,
      data: {
        userId,
        avatar: {
          publicId,
          url,
        },
      },
    })
      .then((r) => {
        // update user
        updateUser();
      })
      .catch(console.error);
  };

  return (
    <>
      <section className="flex flex-wrap items content-start w-full h-5/6">
        <AvatarList
          avatarList={avatarList}
          activationHandler={activationHandler}
          activeAvatar={activeAvatar}
        />
      </section>
      <Button block className="m-auto w-1/2" onClick={pickAvatar}>
        Store
      </Button>
    </>
  );
};

export default AvatarPicker;
