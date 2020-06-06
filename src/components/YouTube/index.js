import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '@material-ui/core/Button';
import Heart from 'mdi-material-ui/Heart';

// import { accentColorDark } from 'static/Colors';
import { accentColorDark } from '../../static/Colors';

// import BackgroundAvatar from 'components/BackgroundAvatar';
import BackgroundAvatar from '../BackgroundAvatar';
import TypingText from '../Layout/TypingText';

// import messages from './messages';
import Typist from 'react-typist';

const styles = {
  heart: {
    color: accentColorDark,
  },
};

/* eslint-disable react/prefer-stateless-function */
// export class About extends React.PureComponent {
// export class About extends React.Component {
export default function YouTube(props) {
  // const 
  const { t, i18n } = useTranslation('translation');
  const { profileData } = props;
  
  return (
    <div>
      <BackgroundAvatar
        isHidden={false}
      />
      <div className="display-flex grid-x">
        <div className="flex auto cell" />

        <span className="medium-8 cell text-align-right">
          <Typist
            className="TypistExample-message"
            cursor={{ hideWhenDone: true }}
          >
            {/*<h1 style={{fontSize:'4rem'}} className="medium-8 auto cell">*/}
            {/*  Hey there, my name is*/}
            {/*  <br />*/}
            {/*  Dave Richardson*/}
            {/*</h1>*/}
            {/*<Typist.Delay ms={250} />*/}
            {/*<h1>On YouTube, you can find my videos about,</h1>*/}
            {/*<br />*/}
            {/*<h1>* software development</h1>*/}
            {/*<Typist.Delay ms={250} />*/}
            {/*<h1>* places I've been, and experiences I've had</h1>*/}
            {/*<Typist.Delay ms={250} />*/}
            {/*<h1>*/}
            {/*  * things I've lrarne*/}
            {/*  <Typist.Backspace count={5} delay={500} />*/}
            {/*  <Typist.Delay ms={350} />*/}
            {/*  earned*/}
            {/*  <Typist.Delay ms={750} />*/}
            {/*</h1>*/}

            {/*<br />*/}
            {/*<h2>For more information about me, check out my website,</h2>*/}
            {/*<h1 style={{fontSize:'4rem'}} className="medium-6 auto cell">www.daverichardson.ca</h1>*/}
            <h1 style={{fontSize:'8rem'}} className="medium-8 auto cell">
              3D Printing Cats...
            </h1>
            <br />
          </Typist>
        </span>
      </div>
      <br />
    </div>
  );
};
