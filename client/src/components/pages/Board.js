// @flow

import React, { Fragment } from 'react';
import Post from '../Post';
import { connect } from 'react-redux';
import AddPostLink from '../buttonsAndLinks/AddPostLink';

const Board = ({ authState: { authenticatedAs }, boardState: { selectedBoard } }) =>
{
   return (
      <Fragment>
         <h1>Board</h1>
         {authenticatedAs && 
            <AddPostLink />
         }
         <h1>{selectedBoard && selectedBoard.name}</h1>
         <Fragment>
            {selectedBoard && selectedBoard.posts ? selectedBoard.posts.map(post => <Post key={post.id} postId={post.id} />) : <h1>Loading Board...</h1>}
         </Fragment>
      </Fragment>
   );
};

const mapStateToProps = state => ({
   boardState: state.boardState,
   authState: state.authState,
});

export default connect(mapStateToProps)(Board);