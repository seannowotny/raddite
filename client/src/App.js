// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BoardRouter from './routers/BoardRouter';
import PostRouter from './routers/PostRouter';
import Home from './components/pages/Home';
import Board from './components/pages/Board';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import Post from './components/pages/Post';
import PostCreate from './components/pages/PostCreate';
import PostEdit from './components/pages/PostEdit';

import RedirectState from './context/redirect/RedirectState';
import BoardState from './context/board/BoardState';

import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
  <Router>
    <RedirectState>
      <BoardState>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />

            <Route exact path='/profile/:userName' component={Profile} />

            <Route exact path='/:boardName'>
              <BoardRouter>
                <Switch>

                  <Route exact path='/:boardName/:postName'>
                    <PostRouter>
                      <Post/>
                    </PostRouter>
                  </Route>
                  
                  <Board />

                </Switch>
              </BoardRouter>
            </Route>
            <Route exact path='/:boardName/:postName/edit' component={PostEdit} />
            <Route exact path='/:boardName/create' component={PostCreate} />
            
          </Switch>
        </div>
      </BoardState>
    </RedirectState>
  </Router>
  );
}

export default App;
