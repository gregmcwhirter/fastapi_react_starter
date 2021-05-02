import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const title = 'The Invercio App';

/* prettier-ignore */
ReactDOM.render(
  <App title={title} />,
  document.getElementById('app'),
);

module.hot.accept();
