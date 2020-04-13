import React from 'react';

// import daverich204Avatar from 'images/profile1_transparent.png';
import daverich204Avatar from '../../images/avatar.png';

import BackgroundAvatarContainer from './BackgroundAvatarContainer';

export default function BackgroundAvatar(props) {
  return <BackgroundAvatarContainer src={daverich204Avatar} {...props} />;
}
