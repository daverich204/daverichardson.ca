import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Textfit } from 'react-textfit';

import {
  Typography,
  Toolbar,
  IconButton,
  AppBar,
  Badge,
  Tooltip,
} from '@material-ui/core';
import { Bell, Menu, Github as GithubCircle, Copyright, GoogleTranslate } from 'mdi-material-ui';

import { SkeletonTheme } from 'react-loading-skeleton';

import logo from '../../images/daverichardson_logo_small.png';

import {
  accentColor,
  backgroundContrast,
  backgroundContrastLight,
} from '../../static/Colors';
import CardExpander from './CardExpander';
import CardContainer from './CardContainer';
import BreathingCircle from './BreathingCircle';
import BreathingCircleAccent from './BreathingCircleAccent';
import Footer from './Footer';
import HeaderLogo from './HeaderLogo';

const styles = {
  flex: {
    paddingLeft: '1rem',
  },
  menuButton: {
    marginTop: '0.125rem',
    color: accentColor,
  },
  menu: {
    width: '1.75rem',
    height: '1.75rem',
  },
  copyright: {
    width: '1rem',
    height: '1rem',
  },
  name: {
    textOverflow: 'wrap',
    flexGrow: 1,
  }
};

const year = new Date().getFullYear();

function Layout({ children, openNotif, openMenu, menuItemsList }) {
  const { t, i18n } = useTranslation('translation');

  const toggleLanguage = () => {
    const nextLanguage = (i18n.language !== "zh" ? "zh" : "en");
    i18n.changeLanguage(nextLanguage);
  }

  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton
            className="hide-for-large"
            color="inherit"
            aria-label="Menu"
            style={styles.menuButton}
            onClick={openMenu}
          >
            <Menu style={styles.menu} />
          </IconButton>
          <Typography
            className="flex"
            variant="h6"
            component="h1"
            color="inherit"
            style={styles.flex}
            noWrap
          >
            <Link to="/">
              <span className="show-for-large">
                <HeaderLogo src={logo} alt="dave richardson" />
              </span>
              <span className="show-for-medium">
                {t('firstname')}
                {i18n.language == "en" && (<>&nbsp;</>)}
                {t('lastname')}
              </span>
              <span className="show-for-medium font-weight-very-light">
                 {' | '}
                 {t('title')}
              </span>
              <span className="show-for-small hide-for-medium">
                {t('name')}
              </span>
            </Link>
          </Typography>
          {menuItemsList}

          <Tooltip title="My open source work" className={"show-for-medium"}>
            <IconButton
              color="inherit"
              href="https://github.com/daverich204"
              target="_blank"
            >
              <GithubCircle />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton
              color="inherit"
              onClick={() => openNotif('contact', t('notifications.contact'))}
            >
              <Badge
                badgeContent={<h2 className="font-weight-normal">!</h2>}
                color="error"
              >
                <Bell />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Change language">
            <IconButton
              color="inherit"
              onClick={() => toggleLanguage()}
            >
              <Badge
                badgeContent={i18n.language === 'zh' ? '中' : i18n.language}
                color="primary"
              >
                <GoogleTranslate />
              </Badge>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <CardContainer>
        <SkeletonTheme
          color={backgroundContrastLight}
          highlightColor={backgroundContrast}
        >
          <CardExpander>{children}</CardExpander>
        </SkeletonTheme>
        <BreathingCircle />
        <BreathingCircleAccent />
      </CardContainer>
      <Footer position="absolute">
        <Toolbar>
          <div className="flex" />
          <Typography component="h3" color="inherit">
            <span className="font-weight-light">
              <Copyright style={styles.copyright} /> {window.location.hostname}&nbsp;{year}
            </span>
          </Typography>
        </Toolbar>
      </Footer>
    </div>
  );
}

export default withRouter(Layout);
