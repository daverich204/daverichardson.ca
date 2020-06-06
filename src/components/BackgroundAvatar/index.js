import React from 'react';

import daverich204Avatar_blue from '../../images/avatar_blue.png';
// import deers from '../../images/cats.jpg';

import BackgroundAvatarContainer from './BackgroundAvatarContainer';

export default function BackgroundAvatar(props) {
  return <BackgroundAvatarContainer src={daverich204Avatar_blue} {...props} />;
}
