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
         history.goBack();
      }
   }, [authenticatedAs]);

   return (
      <Fragment>
         <form className="form-group" onSubmit={handleSubmit}>
            <div>
               <label htmlFor="name" className="mt-3">Name</label>
               <input className="form-control"
               type="name"
               name="name"
               required
               autoFocus
               placeholder="Enter your name..."
               minLength={3}
               />
            </div>
            <div>
               <label htmlFor="email" className="mt-3">Email</label>
               <input className="form-control"
               type="email"
               name="email"
               required
               autoFocus
               placeholder="Enter your email..."
               />
            </div>
            <div>
               <label htmlFor="password" className="mt-3">Password</label>
               <input className="form-control"
               type="password"
               name="password"
               required
               minLength={8}
               placeholder="Enter your password..."
               />
            </div>
            <div>
               <label htmlFor="password_confirmation" className="mt-3">Confirm Password</label>
               <input className="form-control"
               type="password"
               name="password_confirmation"
               required
               minLength={8}
               placeholder="Confirm your password..."
               />
            </div>
            <input type="submit" value="Register" className="btn btn-info mt-3"/>
         </form>
      </Fragment>
   )
}

const mapStateToProps = (state) => (
{
   authState: state.authState,
});

export default connect(mapStateToProps, { register, setError })(Register);