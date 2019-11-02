// @flow

import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ErrorAlert from './ErrorAlert';
import { clearAuthErrors } from '../redux/actions/authActions';
import { clearBoardErrors } from '../redux/actions/boardActions';

const Alerts = ({ authState: { authErrors }, boardState: { boardErrors }}): React.Node => 
{
   const [errors, setErrors] = useState(null);

   useEffect(() =>
   {
      if(authErrors)
      {
         if(! Array.isArray(authErrors))
         {
            setErrors(
               <ErrorAlert error={authErrors} callback={clearAuthErrors} />
            );
         }
         else
         {
            const errors = authErrors.map(error => (
               <ErrorAlert error={error} callback={clearAuthErrors} />
            ));
            setErrors(errors);
         }
      }
      if(boardErrors)
      {
         if(! Array.isArray(boardErrors))
         {
            setErrors(
               <ErrorAlert error={boardErrors} callback={clearBoardErrors} />
            );
         }
         else
         {
            const errors = boardErrors.map(error => (
               <ErrorAlert error={error} callback={clearBoardErrors} />
            ));
            setErrors(errors);
         }
      }
   }, [authErrors, boardErrors])

   return errors;
};

const mapStateToProps = state => ({
   authState: state.authState,
   boardState: state.boardState,
});

export default connect(mapStateToProps, { clearAuthErrors, clearBoardErrors })(Alerts);
