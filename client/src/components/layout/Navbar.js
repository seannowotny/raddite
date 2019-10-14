// @flow

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar()
{
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">Boards</div>
      <input id="something" list="somethingelse" />
      <datalist id="somethingelse">
         <option value="Something"></option>
         <option value="Something Else"></option>
         <option value="Another One"></option>
         <option value="Alpha"></option>
         <option value="Bravo"></option>
         <option value="Charlie"></option>
         <option value="Delta"></option>
         <option value="Echo"></option>
         <option value="Foxtrot"></option>
         <option value="Gamma"></option>
      </datalist>
      <div className="navbar-brand ml-2 container">Welcome To The Wonderfully Marvelous Halls Of Raddite</div>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
               <li className="nav-item active">
                  <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
               </li>
               <li className="nav-item active">
                  <Link className="nav-link" to="/login">Login<span className="sr-only">(current)</span></Link>
               </li>
               <li className="nav-item active">
                  <Link className="nav-link" to="/register">Register<span className="sr-only">(current)</span></Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default Navbar;