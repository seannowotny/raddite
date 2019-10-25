// @flow

import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setSelectedBoard, setSelectedPost } from '../actions/boardActions';

function Post({ boardState: { selectedBoard }, setSelectedPost, postId })
{
   let [post, setPost] = useState(null);

   const redirect = () =>
   {
      setSelectedPost(postId);
   }

   useEffect(() => 
   {
      if(selectedBoard && selectedBoard.posts)
      {
         setPost(selectedBoard.posts.find(post => post.id === postId));
      }
   }, [selectedBoard, postId])

   return (
      <Fragment>
         <h1>Post {postId}</h1>
         {post 
         ?  <Fragment>
               <div className="text-center">
                  <button className="btn btn-secondary mt-3 mb-2" onClick={redirect}><h3>{post.title}</h3></button>
               </div>
               <p>{post.body}</p>
            </Fragment>
         :  <h1>Loading Post...</h1>}
      </Fragment>
   );
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedBoard, setSelectedPost })(Post);