import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Router, Route, hashHistory, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import Home from './pages/home';
import Friends from './pages/friends';
import Music from './pages/music';

render((
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/music" component={Music} />
      </div>
    </HashRouter>
  </Provider>
), document.getElementById('content'));

if (module.hot) {
  module.hot.accept();
}
