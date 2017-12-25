import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Router, Route, hashHistory, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import Home from './pages/home';
import Friends from './pages/friends';
import Music from './pages/music';
import LoginHome from './pages/loginHome';
import Login from './components/Login/login';
import Register from './components/Login/register';
import Search from './pages/search';

render((
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/friends" component={Friends} />
        <Route path="/music" component={Music} />
        <Route path="/loginHome" component={LoginHome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={Search} />
      </div>
    </HashRouter>
  </Provider>
), document.getElementById('content'));

if (module.hot) {
  module.hot.accept();
}
