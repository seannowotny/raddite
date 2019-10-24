// @flow

import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';

function Post({ selectedBoard })
{
   return (
      <Fragment>
         <h1>Board</h1>
         <h1>{selectedBoard.selectedPost.title}</h1>
         <p>{selectedBoard.selectedPost.body}</p>
      </Fragment>
   );
}

const mapStateToProps = state => ({
   selectedBoard: state.selectedBoard
});

export default connect(mapStateToProps, null)(Post);