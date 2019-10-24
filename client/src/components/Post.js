// @flow

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setSelectedBoard, setSelectedPost } from '../actions/boardActions';

function Post({ boardState: { selectedBoard }, setSelectedPost, postId })
{
   const post = selectedBoard.posts.filter(post => post.id === postId)[0];

   const redirect = () =>
   {
      setSelectedPost(postId);
   }

   return (
      <Fragment>
         <h1>Post</h1>
         <div className="text-center">
            <button className="btn btn-secondary mt-3 mb-2" onClick={redirect}><h3>{post.title}</h3></button>
         </div>
         <p>{post.body}</p>
      </Fragment>
   );
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedBoard, setSelectedPost })(Post);