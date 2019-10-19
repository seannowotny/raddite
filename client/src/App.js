// @flow

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BoardRouter from './routers/BoardRouter';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import Post from './components/pages/Post';
import PostCreate from './components/pages/PostCreate';
import PostEdit from './components/pages/PostEdit';

import BoardState from './context/board/BoardState';

import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
  <Router>
    <BoardState>
    <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />

          <Route exact path='/profile/:userName' component={Profile} />

          <Route exact path='/:boardName' component={BoardRouter}/>
          <Route exact path='/:boardName/create' component={PostCreate} />
          <Route exact path='/:boardName/:postName' component={Post}/>
          <Route exact path='/:boardName/:postName/edit' component={PostEdit} />
        </Switch>
      </div>
    </BoardState>
  </Router>
  );
}

export default App;
