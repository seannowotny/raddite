// @flow

import * as React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BoardsListing from '../BoardsListing';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../redux/actions/authActions';

function Navbar({ authState: { authenticatedAs }, logout, location: { pathname } })
{
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">BoardsListing</div>
      <BoardsListing/>
      <div className="navbar-brand ml-2 container">{authenticatedAs ? `Welcome ${authenticatedAs.name}` : "Welcome To The Wonderfully Marvelous Halls Of Raddite"}</div>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"> 
               {pathname !== '/' &&
                  <li className="nav-item active">
                     <Link className="nav-link" to="/">Home</Link>
                  </li>
               }
               {! authenticatedAs
               ?  <Fragment>
                     <li className="nav-item active">
                        <Link className="nav-link" to="/login">Login</Link>
                     </li>
                     <li className="nav-item active">
                        <Link className="nav-link" to="/register">Register</Link>
                     </li>
                  </Fragment>
               :  <Fragment>
                     <li className="nav-item active">
                        <button className="nav-link" onClick={logout}>Logout</button>
                     </li>
                  </Fragment>
               }
            </ul>
         </div>
      </nav>
   );
}

const mapStateToProps = (state: any) => (
{
   authState: state.authState
});

export default connect(mapStateToProps, { logout })(withRouter(Navbar));