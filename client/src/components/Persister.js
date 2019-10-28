// @flow

import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setState } from '../actions/authActions';

function Persister({ authState, setState, children }): React.Node 
{
   useEffect(() =>
   {
      const data = localStorage.getItem('authState');
      if(data)
      {
         setState(data);
      }
   }, []);

   useEffect(() =>
   {
      if(authState.token && authState.authenticatedAs)
      {
         // console.log(authState);
         localStorage.setItem('authState', JSON.stringify(authState));
      }
   }, [authState]);

   return null;
}

const mapStateToProps = state => (
{
   authState: state.authState,
});

export default connect(mapStateToProps, { setState })(Persister);