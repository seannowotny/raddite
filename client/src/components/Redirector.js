// @flow

import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Redirector = ({ redirectState: { redirect }, children, history }) => 
{
   return (
   <Fragment>
      {redirect && <Redirect to={redirect}/>}
   </Fragment>
   );
};

const mapStateToProps = state => ({
   redirectState: state.redirectState
});

export default connect(mapStateToProps)(Redirector);
