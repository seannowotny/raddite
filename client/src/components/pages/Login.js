// @flow

import * as React from 'react';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import history from '../../helpers/history';

function Login({ authState: { authenticatedAs }, login }): React.Node 
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
         history.goBack();
      }
   }, [authenticatedAs]);

   return (
      <Fragment>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="email">Email</label>
               <input
               type="email"
               name="email"
               required
               autoFocus
               placeholder="Enter your email..."
               />
            </div>
            <div>
               <label htmlFor="password">Password</label>
               <input
               type="password"
               name="password"
               required
               placeholder="Enter your password..."
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
});

export default connect(mapStateToProps, { login })(Login);