/**
 *
 * Contact
 *
 */
import React, { useEffect, useState } from 'react';
import Forum from 'mdi-material-ui/Forum';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import TypingText from '../Layout/TypingText';

import { backgroundContrastLight } from '../../static/Colors';

import SocialMediaButtons from './SocialMediaButtons';
import ContactOptionContainer from './ContactOptionContainer';

const styles = {
  forum: {
    color: backgroundContrastLight,
  },
};

/* eslint-disable react/prefer-stateless-function */
export default function Contact() {
  const { t } = useTranslation('translation');

  return (
    <div>
      <div className="display-flex">
        <div className="flex" />
        <h1>
          <div className="grid-x">
            <TypingText className="medium-6 auto cell flex">
              {t('pages.contact.title')}
            </TypingText>
            <div className="shrink cell">
              <Forum className="titleIcon" style={styles.forum} />
            </div>
          </div>
        </h1>
      </div>
      <div className="grid-x">
        <div className="auto cell" />
        <span className="text-align-right medium-10 cell grid-x">
          <div className="cell">
            {t('pages.contact.subtitle')}
            <br />
            <br />
            {t('pages.contact.intro')}
            <br />
            <br />
          </div>
          <ContactOptionContainer className="large-6 cell">
            <div>
              <h3>{t('pages.contact.email')}</h3>
              <ul dir="rtl">
                <li>
                  {t('pages.contact.consult')}
                </li>
                <br />
                <li>
                  {t('pages.contact.history')}
                </li>
                <br />
                <li>
                  {t('pages.contact.feedback')}
                </li>
              </ul>
              <p>
                {t('pages.contact.send_an_email')}
                &nbsp;
                <a href={`mailto:${t('email_address')}`}>
                  <strong>{t('email_address')}</strong>
                </a>.
              </p>
              <br />
              <h3>
                Feel free to use my&nbsp;
                <Link to={"/pgp"} style={{textDecoration: 'underline'}}>pgp key</Link>
                , if you're into that sort of thing...
              </h3>
            </div>
          </ContactOptionContainer>
          <ContactOptionContainer className="large-6 cell">
            <div>
              <h3>{t('pages.contact.social')}</h3>
              <ul dir="rtl">
                <li>{t('pages.contact.say_hello')}</li>
                <br />
                <li>{t('pages.contact.know_more_about_me')}</li>
                <br />
                <li>{t('pages.contact.any_other_reason')}</li>
              </ul>
              <span className="text-align-right cell">
                <SocialMediaButtons />
              </span>
              <br />
              <p>
                {t('pages.contact.find_me_as')}
                &nbsp;
                <a href="https://twitter.com/daverich204" target="_blank" rel="noopener noreferrer">
                  <strong>@daverich204</strong>
                </a>
              </p>
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
