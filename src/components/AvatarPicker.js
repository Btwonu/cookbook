import { useState, useEffect } from 'react';
import axios from 'axios';

import AvatarList from './AvatarList';
import Button from './Button';

const AvatarPicker = () => {
  const [avatarList, setAvatarList] = useState([]);
  const [activeAvatar, setActiveAvatar] = useState(null);

  useEffect(() => {
    axios('/images')
      .then((res) => setAvatarList(res.data.resources))
      .catch(console.error);
  }, []);

  const activationHandler = (index) => {
    setActiveAvatar(index);
  };

  const pickAvatar = () => {
    console.log(activeAvatar);
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
