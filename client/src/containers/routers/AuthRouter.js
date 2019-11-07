// @flow

import * as React from 'react';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../../helpers/history';

const AuthRouter = ({ authState: { authenticatedAs }, children }): React.Node =>
{
   useEffect(() => 
   {
      if(authenticatedAs)
      {
         history.push('/');
      }
   }, [authenticatedAs]);

   return (
      <Fragment>{children}</Fragment>
   );
}

const mapStateToProps = state => ({
   authState: state.authState
});

export default connect(mapStateToProps)(AuthRouter);