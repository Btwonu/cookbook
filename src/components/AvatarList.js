import { useState, useEffect } from 'react';
import axios from 'axios';

import Avatar from './Avatar';

const AvatarList = () => {
  const [activeAvatar, setActiveAvatar] = useState(null);
  const [avatarList, setAvatarList] = useState([]);

  useEffect(() => {
    axios('/images')
      .then((res) => setAvatarList(res.data.resources))
      .catch(console.error);
  }, []);

  const activationHandler = (index) => {
    setActiveAvatar(index);
  };

  return avatarList.map((av, index) => {
    // if currently mapped avatar is set as active from the handler
    const isActive = activeAvatar === index ? true : false;

    // add an active class
    let divClasses = 'border w-1/5 h-24 p-1';
    if (isActive) divClasses += ' border-2 border-green-700';

    return (
      <div
        key={index}
        className={divClasses}
        onClick={() => activationHandler(index)}
      >
        <Avatar src={av.url} />
      </div>
    );
  });
};

export default AvatarList;
