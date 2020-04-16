import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';


import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import makeSelectStructure, {
  selectIsDialogOpen,
  selectIsNotifOpen,
  selectNotifType,
  selectNotifMessage,
  selectDialogMessage,
  selectDialogTitle,
  selectIsMenuOpen,
  selectProfileData,
  selectIsIndeterminateLoadingMotionActive,
} from './selectors';

import {
  openNotifAction,
  openDialogAction,
  openMenuAction,
  getProfileDataRequestAction,
} from './actions';

import reducer from './reducer';
import saga from './saga';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import { ChevronLeft, Close } from 'mdi-material-ui';

import Layout from '../../components/Layout';
import IndeterminateProgressMotion from '../../components/IndeterminateProgressMotion';

import DrawerButton from './DrawerButton';
import DrawerCard from './DrawerCard';
import AppBarButton from './AppBarButton';
import HeaderLogo from "../../components/Layout/HeaderLogo";
import logo from "../../images/daverichardson_logo_small.png";

import { Toolbar } from "@material-ui/core";

const styles = {
  drawerChevronLeft: {
    width: '2rem',
    height: '2rem',
  },
};

class Structure extends React.Component {
  componentWillMount() {
    const { getProfileData } = this.props;
    getProfileData();
  }

  render() {
    const {
      children,
      openNotif,
      isNotifOpen,
      notifType,
      notifMessage,
      openDialog,
      isDialogOpen,
      dialogTitle,
      dialogMessage,
      openMenu,
      isMenuOpen,
      t, i18n,
      ...rest
    } = this.props;

    return (
      <div>
        <IndeterminateProgressMotion
          active={rest.isIndeterminateLoadingMotionActive}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isNotifOpen}
          autoHideDuration={isNotifOpen ? 8000 : undefined}
          onClose={() => openNotif()}
          snackbarcontentprops={{
            'aria-describedby': 'notif-main',
          }}
          message={<span id="notif-main">{notifMessage}</span>}
          action={[
            notifType ? (
              <Link
                key={notifType}
                to={{
                  pathname: `/${notifType}`,
                  state: { from: window.location.pathname },
                }}
              >
                <Button color="inherit" onClick={() => openNotif()}>
                  {t(`notifications.${notifType}_button`)}
                </Button>
              </Link>
            ) : (
              notifType
            ),
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => openNotif()}
            >
              <Close />
            </IconButton>,
          ]}
        />
        <SwipeableDrawer
          className="hide-for-large"
          open={isMenuOpen}
          onClose={openMenu}
          onOpen={openMenu}
        >
          <DrawerButton
            title={''}
            icon={<ChevronLeft style={styles.drawerChevronLeft} />}
            onClick={openMenu}
            to="#"
          />
          <Divider />

          <DrawerCard />

          <DrawerButton title={t("navigation.about")} onClick={openMenu} />
          <DrawerButton title={t("navigation.discover")} to="/discover" onClick={openMenu} />
          <DrawerButton title={t("navigation.blog")} to="/blog" onClick={openMenu} />
          <DrawerButton title={t("navigation.contact")} to="/contact" onClick={openMenu} />
          <Divider />

        </SwipeableDrawer>
        <Layout
          openNotif={openNotif}
          openDialog={openDialog}
          openMenu={openMenu}
          menuItemsList={[
            <AppBarButton
              className="show-for-large"
              key="about"
              title={t("navigation.about")}
            />,
            <AppBarButton
              className="show-for-large"
              key="discover"
              title={t('navigation.discover')}
              to="/discover"
            />,
            <AppBarButton
              className="show-for-large"
              key="blog"
              title={t('navigation.blog')}
              to="/blog"
            />,
            <AppBarButton
              className="show-for-large"
              key="contact"
              title={t('navigation.contact')}
              to="/contact"
            />,
          ]}
        >
          {React.cloneElement(children, { ...rest })}
        </Layout>
      </div>
    );
  }
}

Structure.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  structure: makeSelectStructure(),
  isDialogOpen: selectIsDialogOpen(),
  isNotifOpen: selectIsNotifOpen(),
  isMenuOpen: selectIsMenuOpen(),
  notifType: selectNotifType(),
  notifMessage: selectNotifMessage(),
  dialogMessage: selectDialogMessage(),
  dialogTitle: selectDialogTitle(),
  profileData: selectProfileData(),
  isIndeterminateLoadingMotionActive: selectIsIndeterminateLoadingMotionActive(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    openNotif: (type, message) => dispatch(openNotifAction(type, message)),
    openDialog: (title, message) => dispatch(openDialogAction(title, message)),
    openMenu: () => dispatch(openMenuAction()),
    getProfileData: () => dispatch(getProfileDataRequestAction()),    
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'structure', reducer });
const withSaga = injectSaga({ key: 'structure', saga });

export default compose(
  withTranslation('translation'),
  withReducer,
  withSaga,
  withConnect,
)(Structure);
