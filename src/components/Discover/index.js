/**
 *
 * Discover
 *
 */
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import hash from "hash-it";
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { withTranslation } from 'react-i18next';

import BackgroundAvatar from '../BackgroundAvatar';

import ShiftingBackgroundGradient from './ShiftingBackgroundGradient';
import DiscoveryNavigationButtons from './DiscoveryNavigationButtons';
// import SlideRenderer from './SlideRenderer';
import Slide from './Slide';
import ViewSubtitle from './ViewSubtitle';

import slides from './slides';

import { primaryColorDark, accentColorLight, accentText } from '../../static/Colors';

import TypingText from '../Layout/TypingText';

// const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));
const KeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const styles = {
  earth: {
    color: primaryColorDark,
  },
  accountHeart: {
    color: accentColorLight,
  },
  cellphoneText: {
    color: accentText,
  },
};



/* eslint-disable react/prefer-stateless-function */
export class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    index: 0,
  };

  static getDerivedStateFromProps(props, state) {
    const { index } = props.computedMatch.params;

    return (index) ? { index: parseInt(index) } : null
  }  

  handleSwipe = (swipeDirectionAsInteger, isVirtualNavigation) => {
    if (!isVirtualNavigation) {
      const { history } = this.props;
      history.push('/discover');
    }
    const nextIndex = isVirtualNavigation
      ? this.state.index + swipeDirectionAsInteger
      : swipeDirectionAsInteger;

    const lastSlideIndex = slides.length - 1;
    const isLastSlide = nextIndex > lastSlideIndex;
    const isFirstSlide = nextIndex < 0;

    const index = isLastSlide ? 0 : isFirstSlide ? lastSlideIndex : nextIndex;

    this.setState({ index });
  };

  render() {
    const { index, language } = this.state;
    const { t, i18n } = this.props;

    return (
      <div>
        <BackgroundAvatar isHidden={index !== 0} />
        <ShiftingBackgroundGradient index={index} />
        <div className="grid-x">
          <DiscoveryNavigationButtons navigate={this.handleSwipe} />
          <KeyboardSwipeableViews
           resistance
           enableMouseEvents
           className="cell"
           slideCount={slides.length}
           index={index}
           onChangeIndex={nextIndex => this.handleSwipe(nextIndex)}
          >
            {(slides || []).map((slide, key) => {
              const {
                title,
                icon = <div />,
                iconStyleName,
                subtitle,
                view = <div />,
              } = slides[index];
              const TitleIcon = icon;

              return (
                <Slide key={key}>
                  <div className="display-flex">
                    <div className="flex" />
                    <h1>
                      <div className="grid-x">                                
                        
                        <TypingText className="medium-6 auto cell">
                          {t(title)}
                        </TypingText>                        
                        
                        <div className="shrink cell">
                          <TitleIcon
                            className="titleIcon"
                            style={iconStyleName && styles[iconStyleName]}
                          />
                        </div>
                      </div>
                    </h1>
                  </div>
                  <div className="display-flex" key={hash(subtitle)}>
                    <div className="flex" />
                    <ViewSubtitle>                    
                      {t(subtitle)}                        
                    </ViewSubtitle>                      
                  </div>
                  <div className="grid-x" key={hash(view)}>
                    <div className="auto cell" />
                    {view}
                  </div>
                </Slide>
              )              
            })}
          </KeyboardSwipeableViews>
        </div>
      </div>
    );
  }
}

export default withTranslation('translation')(Discover);
