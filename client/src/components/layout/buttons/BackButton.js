// @flow

import * as React from 'react';
import { Fragment } from 'react';
import history from '../../../helpers/history';

function BackButton({ goBack }): React.Node
{
   return (
      <Fragment>
         <button onClick={history.goBack}>Go Back</button>
      </Fragment>
   )
};

export default BackButton;
