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
import Redirector from './components/Redirector';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
  <Router>
    <Provider store={store}>
      <Redirector/>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/login' component={Login} />
          
          <Route exact path='/register' component={Register} />

          <Route exact path='/profile/:userName' component={Profile} />

          <Route path='/:boardName'>
            <BoardRouter>
              <Switch>

                <Route exact path='/:boardName' component={Board}/>

                <Route exact path='/:boardName/:postTitle'>
                  <PostRouter>
                    <Post/>
                  </PostRouter>
                </Route>

                <Route exact path='/:boardName/:postName/edit' component={PostEdit} />
                
                <Route exact path='/:boardName/create' component={PostCreate} />

              </Switch>
            </BoardRouter>
          </Route> 
          
        </Switch>
      </div>
    </Provider>
  </Router>
  );
}

export default App;
