// @flow

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import Post from './components/pages/Post';
import BoardCreate from './components/pages/BoardCreate';
import PostCreate from './components/pages/PostCreate';
import PostEdit from './components/pages/PostEdit';

import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Fragment>
      <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/board/create' component={BoardCreate} />
            <Route exact path='/post/create' component={PostCreate} />
            <Route exact path='/post/:id/edit' component={PostEdit} />
            <Route exact path='/post/:id' component={Post} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
