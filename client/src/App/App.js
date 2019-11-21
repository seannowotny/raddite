// @flow

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import BoardRouter from '../containers/routers/BoardRouter';
import PostRouter from '../containers/routers/PostRouter';
import Home from '../components/_folders/pages/Home/Home';
import Board from '../components/_folders/pages/Board/Board';
import Login from '../components/_folders/pages/Login/Login';
import Register from '../components/_folders/pages/Register/Register';
import Profile from '../components/_folders/pages/Profile/Profile';
import Post from '../components/_folders/pages/Post/Post';
import AddPost from '../components/_folders/pages/AddPost/AddPost';
import EditPost from '../components/_folders/pages/EditPost/EditPost';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import history from '../helpers/history';

import Navbar from '../components/_folders/layout/Navbar/Navbar';
import Alerts from '../components/Alerts/Alerts';

function App() 
{
  return (
  <Router history={history}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        {/*$FlowFixMe*/}
        <Navbar />
        <div className="container">
          <Alerts />
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/login' component={Login} />
            
            <Route exact path='/register' component={Register} />

            <Route exact path='/profile/:userName' component={Profile} />

            <Route path='/:boardName'>
              <BoardRouter>
                <Switch>

                  <Route exact path='/:boardName/create' component={AddPost} />
                  <Route exact path='/:boardName/:postTitle/edit' component={EditPost} />

                  <Route exact path='/:boardName' component={Board}/>

                  <Route exact path='/:boardName/:postTitle'>
                    <PostRouter>
                      <Post/>
                    </PostRouter>
                  </Route>

                </Switch>
              </BoardRouter>
            </Route> 
            
          </Switch>
        </div>
      </PersistGate>
    </Provider>
  </Router>
  );
}

export default App;
