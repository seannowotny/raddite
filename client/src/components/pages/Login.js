// @flow

import * as React from 'react';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { setRedirect } from '../../actions/redirectActions';

function Login({ authState: { authenticatedAs }, login, setRedirect }): React.Node 
{ 
   const handleSubmit = e =>
   {
      e.preventDefault();

      login({
         email: e.target.email.value,
         password: e.target.password.value
      });
   }

   useEffect(() =>
   {
      if(authenticatedAs)
      {
         setRedirect('/');
      }
      //eslint-disable-next-line
   })

   return (
      <Fragment>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="email">Email</label>
               <input
               type="email"
               name="email"
               required
               />
            </div>
            <div>
               <label htmlFor="email">Password</label>
               <input
               type="password"
               name="password"
               required
               />
            </div>
            <input type="submit" value="Login" />
         </form>
      </Fragment>
   )
}

const mapStateToProps = (state) => (
{
   authState: state.authState,
   redirectState: state.redirectState
});

export default connect(mapStateToProps, { login, setRedirect })(Login);