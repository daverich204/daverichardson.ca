import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

import Button from '@material-ui/core/Button';
import Earth from 'mdi-material-ui/Earth';
import CellphoneText from 'mdi-material-ui/CellphoneText';
import Newspaper from 'mdi-material-ui/Newspaper';
import AccountHeart from 'mdi-material-ui/AccountHeart';
import BusIcon from 'mdi-material-ui/Bus';
import BarleyIcon from 'mdi-material-ui/Barley';
import AirplaneIcon from 'mdi-material-ui/AirplaneTakeoff';

import DiscoverVideo from './DiscoverVideo';
import DiscoverVideoContainer from './DiscoverVideoContainer';
import SlideDescription from './SlideDescription';

import myRideLoopVideo from '../../videos/myride-loop.webm';
import myRideLoopVideoMP4 from '../../videos/myride-loop.mp4';
import daweiLoopVideo from '../../videos/dawei-loop.webm';
import daweiLoopVideoMP4 from '../../videos/dawei-loop.mp4';
import enigmaLoopVideo from '../../videos/enigma-loop.webm';
import enigmaLoopVideoMP4 from '../../videos/enigma-loop.mp4';

import devoteamDiscoveryLoopVideo from '../../videos/devoteam-discovery-loop.webm';
import dimkastDiscoveryLoopVideo from '../../videos/dimkast-discovery-loop.webm';
import uxpeakDiscoveryLoopVideo from '../../videos/uxpeak-discovery-loop.webm';
import devoteamDiscoveryLoopVideoMp4 from '../../videos/devoteam-discovery-loop.mp4';
import dimkastDiscoveryLoopVideoMp4 from '../../videos/dimkast-discovery-loop.mp4';
import uxpeakDiscoveryLoopVideoMp4 from '../../videos/uxpeak-discovery-loop.mp4';

const slides = [
  {
    title: 'pages.discover.title',
    icon: Earth,
    iconStyleName: 'earth',
    subtitle: 'pages.discover.subtitle',
    view: (
      <Translation>
        {(t, { i18n }) => (
          <span className="medium-8 cell text-align-right indent" key={`discover-${i18n.language}`}>
            {t('pages.discover.intro')}
            <br />
            <br />
            {t('pages.discover.summary')}
            <br />          
            <br />
            <Link
              to={{
                pathname: '/discover/1',
                state: { from: window.location.pathname },
              }}
            >
              <Button color="secondary" variant="contained">
                {t('pages.discover.experience')}
              </Button>
            </Link>
          </span>
        )}
      </Translation>      
    ),
  },
  {
    title: 'pages.discover.jobs.transit.title',
    icon: BusIcon,
    // iconStyleName: 'accountHeart',
    subtitle: 'pages.discover.jobs.transit.position',
    view: (
      <Translation>
        {(t, { i18n }) => {
          function createMarkup(localeKey) { return {__html: t(localeKey)}; };

          return (
          <div className="cell grid-x">
            <SlideDescription className="large-4 cell">
              <span
                className="medium-8 cell font-weight-light text-align-right indent"
                color="inherit"
                dangerouslySetInnerHTML={createMarkup('pages.discover.jobs.transit.description')}
              />
              <br />
              <br />
              <Button
                color="secondary"
                variant="contained"
                href="https://winnipegtransit.com"
                target="_blank"
              >
                {t('pages.discover.jobs.transit.visit')}
              </Button>
            </SlideDescription>
            <DiscoverVideoContainer className="large-8 cell">
              <DiscoverVideo controls loop autoPlay muted>
                <source src={myRideLoopVideo} type="video/webm" />
                <source src={myRideLoopVideoMP4} type="video/mp4" />
              </DiscoverVideo>
            </DiscoverVideoContainer>
          </div>
        )}}
      </Translation>   
    ),
  }, 
  {
    title: 'pages.discover.jobs.dawei.title',
    icon: Newspaper,
    // iconStyleName: 'cellphoneText',
    subtitle: 'pages.discover.jobs.dawei.position',
    view: (
      <Translation>
        {(t, { i18n }) => {
          function createMarkup(localeKey) { return {__html: t(localeKey)}; };

          return (
            <div className="cell grid-x">
              <SlideDescription className="large-4 cell">
                <span
                  className="medium-8 cell font-weight-light text-align-right indent"
                  color="inherit"
                  dangerouslySetInnerHTML={createMarkup('pages.discover.jobs.dawei.description')}
                />
              </SlideDescription>
              <DiscoverVideoContainer className="large-8 cell">
                <DiscoverVideo controls loop autoPlay muted>
                  <source src={daweiLoopVideo} type="video/webm" />
                  <source src={daweiLoopVideoMP4} type="video/mp4" />
                </DiscoverVideo>
              </DiscoverVideoContainer>
            </div>
          )
        }}
      </Translation>
    ),
  },
  {
    title: 'pages.discover.jobs.enigma.title',
    icon: CellphoneText,
    // iconStyleName: 'accountHeart',
    subtitle: 'pages.discover.jobs.enigma.position',
    view: (
      <Translation>
        {(t, { i18n }) => {
          function createMarkup(localeKey) { return {__html: t(localeKey)}; };

          return  (
            <div className="cell grid-x">
              <SlideDescription className="large-4 cell">
                <span
                  className="medium-8 cell font-weight-light text-align-right indent"
                  color="inherit"
                  dangerouslySetInnerHTML={createMarkup('pages.discover.jobs.enigma.description')}
                />
                <br />
                <br />
                <Button
                  color="primary"
                  variant="contained"
                  href="https://enigmanetworks.ca"
                  target="_blank"
                >
                  More Info
                </Button>
              </SlideDescription>
              <DiscoverVideoContainer className="large-8 cell">
                <DiscoverVideo controls loop autoPlay muted>
                  <source src={enigmaLoopVideo} type="video/webm" />
                  <source src={enigmaLoopVideoMP4} type="video/mp4" />
                </DiscoverVideo>
              </DiscoverVideoContainer>
            </div>
          )
        }}
      </Translation>
    ),
  },
  // {
  //   title: 'aafc canada',
  //   icon: BarleyIcon,
  //   // iconStyleName: 'accountHeart',
  //   subtitle: 'Systems Analyst',
  //   view: (
  //     <div className="cell grid-x">
  //       <SlideDescription className="large-4 cell">
  //         Some people wait for their bus to arrive.
  //         <br />
  //         At <strong>Winnipeg Transit</strong>, we sure those people will know when that will happen.
  //         <br />
  //         <br />
  //         I function as a programmer / analyst on the <strong>Public Facing Apps</strong> team. I
  //         have experience with Rails and I specialize in JavaScript technologies; specifically NodeJS.
  //         <br />
  //         <br />
  //         In addition, I have a strong passion for emerging technologies, so I
  //         function as a React/React Native specialist and actively study and test new
  //         tools with my team.
  //         <br />
  //         <br />
  //         <Button
  //           color="secondary"
  //           variant="contained"
  //           href="https://winnipegtransit.com"
  //           target="_blank"
  //         >
  //           Visit Winnipeg Transit
  //         </Button>
  //       </SlideDescription>
  //       <DiscoverVideoContainer className="large-8 cell">
  //         <DiscoverVideo controls loop autoPlay muted>
  //           <source src={devoteamDiscoveryLoopVideo} type="video/webm" />
  //           <source src={devoteamDiscoveryLoopVideoMp4} type="video/mp4" />
  //         </DiscoverVideo>
  //       </DiscoverVideoContainer>
  //     </div>
  //   ),
  // },
  // {
  //   title: 'uav ground control station',
  //   icon: AirplaneIcon,
  //   // iconStyleName: 'cellphoneText',
  //   subtitle: 'Lead Developer',
  //   view: (
  //     <div className="cell grid-x">
  //       <SlideDescription className="large-4 cell">
  //         The <strong>University of Winnipeg</strong> offers an amazing <strong>Senior Systems Development Project</strong>.
  //         <br />
  //         <br />
  //         This is an 8 month course where teams of 4 students were responsible for making production ready applications
  //         for local businesses.
  //         <br />
  //         <br />
  //         I was the <strong>Lead Programmer</strong> on the <strong>gUAVS</strong> team, a team responsible for developing
  //         a UAV Ground Control Station for the Canadian Forces School of Aerospace studies.
  //         <br />
  //         <br />
  //         <Button
  //           color="secondary"
  //           variant="contained"
  //           href="http://acs.uwinnipeg.ca/"
  //           target="_blank"
  //         >
  //           Visit U of W
  //         </Button>
  //       </SlideDescription>
  //       <DiscoverVideoContainer className="large-8 cell">
  //         <DiscoverVideo controls loop autoPlay muted>
  //           <source src={devoteamDiscoveryLoopVideo} type="video/webm" />
  //           <source src={devoteamDiscoveryLoopVideoMp4} type="video/mp4" />
  //         </DiscoverVideo>
  //       </DiscoverVideoContainer>
  //     </div>
  //   ),
  // },
  // {
  //   title: 'aafc canada',
  //   icon: BarleyIcon,
  //   iconStyleName: 'accountHeart',
  //   subtitle: 'Web Developer',
  //   view: (
  //     <div className="cell grid-x">
  //       <SlideDescription className="large-4 cell">
  //         Some people wait for their bus to arrive.
  //         <br />
  //         At <strong>Winnipeg Transit</strong>, we sure those people will know when that will happen.
  //         <br />
  //         <br />
  //         I function as a programmer / analyst on the <strong>Public Facing Apps</strong> team. I
  //         have experience with Rails and I specialize in JavaScript technologies; specifically NodeJS.
  //         <br />
  //         <br />
  //         In addition, I have a strong passion for emerging technologies, so I
  //         function as a React/React Native specialist and actively study and test new
  //         tools with my team.
  //         <br />
  //         <br />
  //         <Button
  //           color="secondary"
  //           variant="contained"
  //           href="https://winnipegtransit.com"
  //           target="_blank"
  //         >
  //           Visit Winnipeg Transit
  //         </Button>
  //       </SlideDescription>
  //       <DiscoverVideoContainer className="large-8 cell">
  //         <DiscoverVideo controls loop autoPlay muted>
  //           <source src={devoteamDiscoveryLoopVideo} type="video/webm" />
  //           <source src={devoteamDiscoveryLoopVideoMp4} type="video/mp4" />
  //         </DiscoverVideo>
  //       </DiscoverVideoContainer>
  //     </div>
  //   ),
  // },
];

export default slides;