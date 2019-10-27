// @flow

import React, { Fragment } from 'react';
import Post from '../Post';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/boardActions';

const Board = ({ boardState: { selectedBoard }, getPosts }) =>
{
   return (
      <Fragment>
         <h1>Board</h1>
         <h1>{selectedBoard && selectedBoard.name}</h1>
         <Fragment>
            {selectedBoard && selectedBoard.posts ? selectedBoard.posts.map(post => <Post key={post.id} postId={post.id} />) : <h1>Loading Board...</h1>}
         </Fragment>
      </Fragment>
   );
};

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { getPosts })(Board);