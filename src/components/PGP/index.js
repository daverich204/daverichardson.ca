/**
 *
 * Contact
 *
 */
import React, { useEffect, useState } from 'react';
import Forum from 'mdi-material-ui/Forum';
import Lock from  'mdi-material-ui/Lock';
import { useTranslation } from 'react-i18next';

import TypingText from '../Layout/TypingText';

import {
  accentColorLightGradient,
  backgroundContrastLight,
  primaryText,
  backgroundContrastDark,
  backgroundContrastDarkGradient,
  backgroundDarkGradient,
  backgroundColorLight, accentColorDarkGradient
} from '../../static/Colors';
import { shadow } from '../../static/Accents';
import BackgroundAvatar from "../BackgroundAvatar";
import ContactOptionContainer from "../Contact/ContactOptionContainer";

const styles = {
  forum: {
    color: backgroundContrastLight,
  },
  pgp_key:   {
    // background: `${backgroundContrastLight}`,
    borderRadius: '0.25rem',
    boxShadow: shadow,
    padding: '1rem',
    fontFamily: "courier new, courier, monospace",
    fontSize: "0.7rem",
    overflow: 'auto',
    textAlign: 'left',
    whiteSpace:  'pre',
  }
};

/* eslint-disable react/prefer-stateless-function */
export default function PGP() {
  const { t } = useTranslation('translation');

  const [PGPKey, setPGPKey] = useState(null);

  useEffect(() => {
    if (!PGPKey){
      fetch('/pgp_key.txt')
          .then((r)  => r.text())
          .then((pgp_key) => setPGPKey(pgp_key));
    }

  }, [])

  return (
    <div>
      <div className="display-flex">
        <div className="flex" />
        <h1>
          <div className="grid-x">
            <TypingText className="medium-6 auto cell flex">
              {t('pages.pgp.title')}
            </TypingText>
            <div className="shrink cell">
              <Lock className="titleIcon" style={styles.forum} />
            </div>
          </div>
        </h1>
      </div>
      <div className="grid-x">
        <div className="auto cell" />
        <span className="text-align-right medium-10 cell grid-x">
          <div className="cell">
            {t('pages.pgp.subtitle')}
          </div>
          <br />
          <ContactOptionContainer className="large-5 large-offset-7 cell">
            <div style={styles.pgp_key}>
              {PGPKey}
            </div>
          </ContactOptionContainer>

        </span>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );

}
