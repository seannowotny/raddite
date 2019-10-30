// @flow

import * as React from 'react';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BoardsListing from '../boards/BoardsListing';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Navbar({ authState: { authenticatedAs }, location: { pathname } })
{
   // const [location, setLocation] = useState();

   // useEffect(() =>
   // {
   //    // setLocation(createBrowserHistory().location.pathname);
   //    console.log(history);
   // })

   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">BoardsListing</div>
      <BoardsListing/>
      <div className="navbar-brand ml-2 container">{authenticatedAs ? `Welcome ${authenticatedAs.name}` : "Welcome To The Wonderfully Marvelous Halls Of Raddite"}</div>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"> 
               {pathname !== '/' &&
                  <li className="nav-item active">
                     <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                  </li>
               }
               {! authenticatedAs &&
                  <Fragment>
                     <li className="nav-item active">
                        <Link className="nav-link" to="/login">Login<span className="sr-only">(current)</span></Link>
                     </li>
                     <li className="nav-item active">
                        <Link className="nav-link" to="/register">Register<span className="sr-only">(current)</span></Link>
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

export default connect(mapStateToProps)(withRouter(Navbar));