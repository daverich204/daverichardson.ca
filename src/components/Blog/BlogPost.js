import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import moment from 'moment';

import { accentColorDark } from "../../static/Colors";
// import {useTranslation} from "react-i18next";


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '0.5rem',
    backgroundColor: '#1B2033F0',
    border: '0.25rem solid #01011C',
    marginBottom: '1rem',
  },
  row: {
    flexGrow: 1,
  },
  details: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    flexDirection: 'row',
    paddingBottom: 8,
  },
  cover: {
    width: 273,
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  white: {
    color: '#fff',
  },
  button: {
    backgroundColor: `${accentColorDark}`,
    color: '#fff',
    margin: '1rem',
  }
};

export default function BlogPost({post}) {
  // const { t } = useTranslation('translation');

  const image_url = post['_embedded']['wp:featuredmedia'] ?
    post['_embedded']['wp:featuredmedia'][0].media_details.sizes.medium.source_url : '';

  return (
    <Card style={styles.root}>
      <CardMedia
        className={'hide-for-small show-for-large'}
        style={styles.cover}
        image={image_url}
        title="Image"
      />
      <div style={styles.row}>
        <div style={styles.details}>
          <CardContent style={styles.content}>
            <Typography component="h5" variant="h5">
              <a href={post.link} target={"_blank"} rel={"noreferrer"} title={'Read more'}>
                <span
                 dangerouslySetInnerHTML={{__html: post.title.rendered }}
                 style={{...styles.white, flexGrow: 1, textDecoration: 'underline'}}
                />
              </a>
            </Typography>
            <Typography component={'p'} style={{textAlign: 'left'}}>
              <span dangerouslySetInnerHTML={{__html: post.excerpt.rendered }} style={styles.white} />
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" style={{textAlign: 'right', fontSize: 'smaller'}}>
              <span dangerouslySetInnerHTML={{__html: moment(post.date).format('llll') }} style={styles.white} />
            </Typography>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}