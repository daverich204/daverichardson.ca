/**
 *
 * Blog
 *
 */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import BookOpenPageVariant from 'mdi-material-ui/BookOpenPageVariant';
import Typist from 'react-typist';
import Skeleton from 'react-loading-skeleton';

import BackgroundAvatar from '../BackgroundAvatar';

import BlogWrapper from './BlogWrapper';
import BlogPost from './BlogPost';

import { rollbar } from '../../config/rollbar.js';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const styles = {
  bookOpenPageVariant: {
    marginBottom: '0.5rem',
  },
  blogPost: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  blogPostLink: {
    flexGrow: 1
  }
};

/* eslint-disable react/prefer-stateless-function */
export default function Blog(props) {
  const { t } = useTranslation('translation');

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://blog.daverichardson.ca/wp-json/wp/v2/posts?_embed&per_page=3')
        .then((resp) => {
          if (resp && resp.ok && resp.status === 200) {
            return resp.json();
          } else {
            throw(resp);
          }
        })
        .then((posts) => setBlogPosts(posts))
        .catch((exception) => rollbar.error('Blog/index.js: Fetch Posts Exception', exception));
    }, 250);

  }, [blogPosts])

  const blogTitle = t('pages.blog.title');

  const TypingText = React.useMemo(() => {
    return ({children, ...other}) => (
      <Typist {...other}>
        {children}
      </Typist>
    )
  }, [blogTitle]);

  return (
    <div>
      <BackgroundAvatar />
      <div className="display-flex">
        <div className="flex" />
        <h1>
          <div className="grid-x">
            <TypingText className="medium-6 auto cell">
              {`${blogTitle}`}
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
            { (blogPosts && blogPosts.length) ? (
              (blogPosts || []).map((blogPost, index) => (<BlogPost post={blogPost} key={index} />))
            ) : (
              <div>
                <h1>
                  <Skeleton count={3} />
                </h1>
              </div>
            )}
          </div>
        </BlogWrapper>
      </div>
      <div className="grid-x">
        <div className="auto cell" />
        <a href={'https://blog.daverichardson.ca'} target={'_blank'}>
          <Button variant="contained" color="secondary">
            {t('pages.blog.link_text')}!
          </Button>
        </a>
      </div>
    </div>
  );
}
