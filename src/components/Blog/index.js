/**
 *
 * Blog
 *
 */

import React, { useState } from 'react';
import Rebloggr from 'rebloggr';
import { useTranslation } from 'react-i18next';

// import Rebloggr from 'components/Rebloggr';
import ConsoleLine from 'mdi-material-ui/ConsoleLine';
import BookOpenPageVariant from 'mdi-material-ui/BookOpenPageVariant';
import Typist from 'react-typist';
import Skeleton from 'react-loading-skeleton';

import BackgroundAvatar from '../BackgroundAvatar';

import BlogWrapper from './BlogWrapper';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const styles = {
  bookOpenPageVariant: {
    marginBottom: '0.5rem',
  },
};

/* eslint-disable react/prefer-stateless-function */
export default function Blog(props) {
  const { t, i18n } = useTranslation('translation');

  const [state, setState] = useState({});

  const TypingText = ({children, ...other}) => (
    <Typist {...other}>
      {children}
    </Typist>
  )
  
  return (
    <div>
      <BackgroundAvatar />
      <div className="display-flex">
        <div className="flex" />
        <h1>
          <div className="grid-x">
            <TypingText className="medium-6 auto cell">
              {t('pages.blog.title')}
            </TypingText>
            <div className="shrink cell">
              <BookOpenPageVariant
                className="titleIcon"
                style={styles.bookOpenPageVariant}
              />
            </div>
          </div>
        </h1>        
      </div>
      <div className="display-flex">
        <div className="flex" />        
        <BlogWrapper>
          <div>
            <h2>{t('pages.blog.coming soon')}</h2>
            <h1>                
              <Skeleton count={3} />
            </h1>
          </div>  
        </BlogWrapper>
      </div>
    </div>
  );
}
