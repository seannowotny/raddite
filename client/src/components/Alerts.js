// @flow

import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ErrorAlert from './ErrorAlert';

const Alerts = ({ authState: { authErrors }}): React.Node => 
{
   const [errors, setErrors] = useState(null);

   useEffect(() =>
   {
      if(authErrors)
      {
         if(! Array.isArray(authErrors))
         {
            setErrors(
               <ErrorAlert error={authErrors} />
            );
         }
         else
         {
            const errors = authErrors.map(error => (
               <ErrorAlert error={error} />
            ));
            setErrors(errors);
         }
      }
   }, [authErrors])

   return errors;
};

const mapStateToProps = state => ({
   authState: state.authState
});

export default connect(mapStateToProps)(Alerts);
