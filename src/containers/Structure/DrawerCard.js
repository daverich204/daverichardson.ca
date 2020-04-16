import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import avatar from '../../images/avatar.png';
import {Toolbar} from "@material-ui/core";
import {withTranslation} from "react-i18next";

import {backgroundContrastDark, primaryText} from "../../static/Colors";

const styles = {
  root: {
    display: 'flex',
    backgroundColor: backgroundContrastDark,
    color: primaryText
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '8',
    paddingBottom: '8',
  },
  text: {
    color: `${primaryText}`,
    fontWeight: 'bold',
  }
};

export function DrawerCard({t,i18n}) {
  return (
    <Card style={styles.root}>
      <div style={styles.details}>
        <CardContent style={styles.content}>
          <Typography component="h5" variant="h5">
            <span className="show-for-medium" style={styles.text}>
              {t('name')}
            </span>
            <span className="show-for-small hide-for-medium" style={styles.text}>
                {t('firstname')}
                {i18n.language == "en" && <br />}
              {t('lastname')}
            </span>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" style={styles.text}>
            {t('title')}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        style={styles.cover}
        image={avatar}
        title="Live from space album cover"
      />
    </Card>
  );
}

export default withTranslation('translation')(DrawerCard)