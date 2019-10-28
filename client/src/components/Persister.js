// @flow

import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPersistedAuthState } from '../actions/authActions';

function Persister({ getPersistedAuthState }): React.Node 
{
   useEffect(() =>
   {
      getPersistedAuthState();
   }, []);

   return null;
}

export default connect(null, { getPersistedAuthState })(Persister);