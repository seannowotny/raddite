// @flow

import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPersistedAuthState } from '../actions/authActions';
import { getPersistedHistoryState } from '../actions/historyActions';

function Hydrater({ getPersistedAuthState }): React.Node 
{
   useEffect(() =>
   {
      getPersistedAuthState();
      getPersistedHistoryState();
      //eslint-disable-next-line
   }, []);

   return null;
}

export default connect(null, { getPersistedAuthState })(Hydrater);