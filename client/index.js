import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Router, Route, hashHistory, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import Home from './pages/home';
import Login from './pages/login';

render((
  <Provider>
    <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </HashRouter>
  </Provider>
), document.getElementById('content'));

if(module.hot) {
	module.hot.accept();
}
