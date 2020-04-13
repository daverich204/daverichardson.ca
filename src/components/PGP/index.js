/**
 *
 * Contact
 *
 */
import React, { useEffect, useState } from 'react';
import Forum from 'mdi-material-ui/Forum';
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

const styles = {
  forum: {
    color: backgroundContrastLight,
  },
  pgp_key:   {
    background: `${backgroundDarkGradient}`,
    borderRadius: '0.25rem',
    boxShadow: shadow,
    padding: '1rem',
    fontFamily: "courier new, courier, monospace",
    fontSize: "0.7rem",
    overflow: 'auto',
    textAlign: 'left',
  }
};

/* eslint-disable react/prefer-stateless-function */
export default function PGP() {
  const { t } = useTranslation('translation');

  const [PGPKey, setPGPKey] = useState(true);

  useEffect(() => {
    fetch('/pgp_key.txt')
        .then((r)  => r.text())
        .then((pgp_key) => setPGPKey(pgp_key))
  }, [])

  return (
    <div>
      <div className="display-flex">
        <div className="flex" />
        <h1>
          <div className="grid-x">
            <TypingText className="medium-6 auto cell flex">
              {t('So you wanna talk securely?')}
            </TypingText>
            <div className="shrink cell">
              <Forum className="titleIcon" style={styles.forum} />
            </div>
          </div>
        </h1>
      </div>
      <div className="grid-x">
        <div className="auto cell flex" />
        <span className="text-align-right cell medium-4 grid-x">
          <div className="cell">
            <br />
            {t('Feel free to use my PGP key')}
            <pre style={styles.pgp_key}>
              {PGPKey}
            </pre>
            <br />
          </div>
        </span>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );

}
