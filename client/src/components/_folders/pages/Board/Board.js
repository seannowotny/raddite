// @flow

import React, { Fragment } from 'react';
import Post from '../Post/Post';
import { connect } from 'react-redux';
import AddPostLink from '../../buttonsAndLinks/AddBoardButton/AddBoardButton';

const Board = ({ authState: { authenticatedAs }, boardState: { selectedBoard } }) =>
{
   return (
      <Fragment>
         <h1 className="display-5 text-center my-4">{selectedBoard && selectedBoard.name}</h1>
         {authenticatedAs && 
            <AddPostLink />
         }
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