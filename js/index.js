require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Router, Route, browserHistory } from 'react-router'
import Inbox from './components/Inbox';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/inbox" component={Inbox} />
  </Router>,
  document.getElementById('app')
);
