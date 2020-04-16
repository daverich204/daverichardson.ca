  
/**
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';

import createHistory from 'history/createBrowserHistory';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme, ThemeProvider } from '@material-ui/styles';

import CustomTheme from './static/Theme';



import 'raf/polyfill';

import 'sanitize.css/sanitize.css';
import 'react-typist/dist/Typist.css';

// Import root app
import App from './containers/App';

// // Import Language Provider
// import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
// import '!file-loader?name=[name].[ext]!./icons/favicon.ico';
// import 'file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';

// Import i18n messages
import i18n from './i18n';

// Import CSS reset and Global Styles
import './global-styles';
import './foundation.min.css';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={CustomTheme}>
        <ConnectedRouter history={history}>
          <I18nextProvider i18n={ i18n }>
            <Suspense fallback={<Loader />}>
              <App />
            </Suspense>
            </I18nextProvider>
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>,
    MOUNT_NODE,
  );
};


const Loader = () => (<div>Loading...</div>)

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', './containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

// Chunked polyfill for browsers without Intl support
// if (!window.Intl) {
//   new Promise(resolve => {
//     resolve(import('intl'));
//   })
//     .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
//     .then(() => render(translationMessages))
//     .catch(err => {
//       throw err;
//     });
// } else {
//   render(translationMessages);
// }

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

render();