// @flow

import * as React from 'react';
import { Fragment } from 'react';
import Comment from '../Comment/Comment';
import { connect } from 'react-redux';

const Comments = ({ boardState: { selectedPost } }): React.Node =>
{ 
   return (
      <Fragment>
         {selectedPost && selectedPost.comments &&
         selectedPost.comments.map(comment => (<Comment key={comment.id} id={comment.id} comment={comment}/>))}
      </Fragment>
   );
}

const mapStateToProps = (state: any) => ({
   boardState: state.boardState
});

export default connect(mapStateToProps)(Comments);