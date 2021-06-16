import { useState } from 'react';

import Avatar from './Avatar';

import zeroAv from '../assets/images/avatars/av-0.svg';
import femaleAv from '../assets/images/avatars/av-default-female.svg';
import glassesAv from '../assets/images/avatars/av-glasses.svg';

const AvatarList = () => {
  const avatarList = [zeroAv, femaleAv, glassesAv];
  const [activeAvatar, setActiveAvatar] = useState(null);

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
        <Avatar src={av} />
      </div>
    );
  });
};

export default AvatarList;
