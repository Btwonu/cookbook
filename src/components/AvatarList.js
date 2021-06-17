import { useState } from 'react';

import Avatar from './Avatar';

const AvatarList = ({ avatarList, activeAvatar, activationHandler }) => {
  return avatarList.map((av, index) => {
    // if currently mapped avatar is set as active from the handler
    const isActive = activeAvatar === index ? true : false;

    // add an active class
    let divClasses = 'border w-2/5 sm:w-1/5 h-24 p-1';
    if (isActive) {
      divClasses = divClasses.replace('border', 'border-4 border-accent');
    }

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
