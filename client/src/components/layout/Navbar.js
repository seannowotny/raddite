// @flow

import * as React from 'react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import BoardsListing from '../BoardsListing';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../redux/actions/authActions';
import AddBoardButton from '../buttonsAndLinks/AddBoardButton';

function Navbar({ boardState: { selectedBoard },authState: { authenticatedAs }, logout, location: { pathname } })
{
   const [input, setInput] = useState('');

   return (
      // // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      // // <div className="container">
      // //    <BoardsListing input={input} setInput={setInput}/>
      // //    {authenticatedAs && (! selectedBoard || input.toLowerCase() !== selectedBoard.name.toLowerCase()) && input.length > 2 && input.length < 21 &&
      // //       <AddBoardButton input={input}/> 
      // //    }
      // //    {/* <button className="btn btn-link no-underline">Add</button> */}
      // //    <div className="navbar-brand container center">{authenticatedAs ? `Welcome ${authenticatedAs.name}` : "Welcome To Raddite"}</div>
      // //       <ul className="navbar-nav mr-auto"> 
      // //          {pathname !== '/' &&
      // //             <li className="nav-item active">
      // //                <Link className="nav-link no-underline" to="/">Home</Link>
      // //             </li>
      // //          }
      // //          {! authenticatedAs
      // //          ?  <Fragment>
      // //                <li className="nav-item active">
      // //                   <Link className="nav-link no-underline" to="/login">Login</Link>
      // //                </li>
      // //                <li className="nav-item active">
      // //                   <Link className="nav-link no-underline" to="/register">Register</Link>
      // //                </li>
      // //             </Fragment>
      // //          :  <Fragment>
      // //                <li className="nav-item active">
      // //                   <button type="button" className="btn btn-link text-dark no-underline" onClick={logout}>Logout</button>
      // //                </li>
      // //             </Fragment>
      // //          }
      // //       </ul>
      // //    </div>
      // // </nav>
      <nav role="navigation" className="navbar navbar-default navbar-fixed-top navbar-light bg-light">
         <div className="container">
            <div className="pull-left">         
                  <BoardsListing input={input} setInput={setInput}/>      
               {authenticatedAs && (! selectedBoard || input.toLowerCase() !== selectedBoard.name.toLowerCase()) && input.length > 2 && input.length < 21
               ?  <AddBoardButton input={input}/> 
               :  <div className="btn btn-link btn-sm mb-2 mr-3 text-light">Add</div>
               }        
            </div>
            <ul className="nav pull-right">
               <li className="navbar-brand pull-left">{authenticatedAs ? `Welcome ${authenticatedAs.name}` : "Welcome To Raddite"}</li>
               <li className="nav pull-right">
               {pathname !== '/' &&
                     <Link className="nav-link no-underline" to="/">Home</Link>
               }
               {! authenticatedAs
               ?  <Fragment>
                        <Link className="nav-link no-underline" to="/login">Login</Link>
                        <Link className="nav-link no-underline" to="/register">Register</Link>
                  </Fragment>
               :  <Fragment>
                        <button type="button" className="btn btn-link text-dark no-underline" onClick={logout}>Logout</button>
                  </Fragment>
               }
               </li>
            </ul>
         </div>
      </nav>
   );
}

const mapStateToProps = (state: any) => (
{
   authState: state.authState,
   boardState: state.boardState,
});

export default connect(mapStateToProps, { logout })(withRouter(Navbar));