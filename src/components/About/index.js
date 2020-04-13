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

const styles = {
  heart: {
    color: accentColorDark,
  },
};

/* eslint-disable react/prefer-stateless-function */
// export class About extends React.PureComponent {
// export class About extends React.Component {
export default function About(props) {
  // const 
  const { t, i18n } = useTranslation('translation');
  const { profileData } = props;
  
  return (
    <div>
      <BackgroundAvatar
        isHidden={profileData.getIn(['content', 'rendered']).length < 1}
      />
      <div className="display-flex">
        <div className="flex" />
        <h1>
          <div className="grid-x">
            <TypingText className="medium-6 auto cell">
              {t('pages.about.title')}
            </TypingText>
            <div className="shrink cell">
              <Heart className="titleIcon" style={styles.heart} />
            </div>
          </div>
        </h1>
      </div>
      <div className="display-flex grid-x">
        <div className="flex auto cell" />
        {profileData.getIn(['content', 'rendered']).length > 1 ? (
          <span
            className="medium-8 cell font-weight-light text-align-right indent"
            color="inherit"
            dangerouslySetInnerHTML={{ __html: t('pages.about.info') }}
          />
        ) : (
          <span className="medium-8 cell text-align-right">
            <Skeleton count={3} />
            <br />
            <br />
            <Skeleton />
          </span>
        )}
      </div>
      <br />
      <div className="grid-x">
        <div className="auto cell" />
        <Link
          to={{
            pathname: '/discover',
            state: { from: window.location.pathname },
          }}
        >
          <Button variant="contained" color="secondary">
            {t('navigation.discover')}!
          </Button>
        </Link>
      </div>
    </div>
  );
};
