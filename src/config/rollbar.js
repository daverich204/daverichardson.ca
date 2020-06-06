import React from 'react';
import Rollbar from 'rollbar';

export const rollbar = new Rollbar({
  accessToken: 'cdf13885fede4985bbaa83bd1b2714df',
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: window.location.host
  }
});

