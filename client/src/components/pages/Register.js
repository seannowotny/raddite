// @flow

import * as React from 'react';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { register, setError } from '../../redux/actions/authActions';
import history from '../../helpers/history';

function Register({ authState: { authenticatedAs }, register, setError }): React.Node 
{ 
   const handleSubmit = e =>
   {
      if(e.target.password.value === e.target.password_confirmation.value)
      {
         e.preventDefault();

         register({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            password_confirmation: e.target.password_confirmation.value,
         });
      }
      else
      {
         setError('Password doesn\'t match Confirm Password');
      }
   }

   useEffect(() => 
   {
      if(authenticatedAs)
      {
         history.push('/');
      }
   }, [authenticatedAs]);

   return (
      <Fragment>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="name">Email</label>
               <input
               type="text"
               name="name"
               required
               autoFocus
               minLength={3}
               placeholder="Enter your name..."
               />
            </div>
            <div>
               <label htmlFor="email">Email</label>
               <input
               type="email"
               name="email"
               required
               placeholder="Enter your email..."
               />
            </div>
            <div>
               <label htmlFor="password">Password</label>
               <input
               type="password"
               name="password"
               required
               minLength={8}
               placeholder="Enter your password..."
               />
            </div>
            <div>
               <label htmlFor="password_confirmation">Confirm Password</label>
               <input
               type="password"
               name="password_confirmation"
               required
               minLength={8}
               placeholder="Confirm your password..."
               />
            </div>
            <input type="submit" value="Register" />
         </form>
      </Fragment>
   )
}

const mapStateToProps = (state) => (
{
   authState: state.authState,
});

export default connect(mapStateToProps, { register, setError })(Register);