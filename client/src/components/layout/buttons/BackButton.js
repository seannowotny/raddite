// @flow

import * as React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { goBack } from '../../../actions/redirectActions';
import { useHistory } from 'react-router-dom';

function BackButton({ goBack }): React.Node
{
   const history = useHistory();

   return (
      <Fragment>
         <button onClick={() => goBack(history.goBack)}>Go Back</button>
         {/* <button onClick={() => history.goBack()}>Go Back</button> */}
      </Fragment>
   )
}

const mapStateToProps = state => (
{
   redirectState: state.redirectState
});

export default connect(mapStateToProps, { goBack })(BackButton);
