// @flow

import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';

function Post({ boardState: { selectedBoard, selectedPost }})
{
   return (
      <Fragment>
         <h1>Post</h1>
         {selectedPost 
         ?  <Fragment>
            <h1>{selectedPost.title}</h1>
            <p>{selectedPost.body}</p>
            </Fragment>
         :  <h1>Loading Post...</h1>
         }
      </Fragment>
   );
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, null)(Post);