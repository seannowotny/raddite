// @flow

import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setSelectedBoard, setSelectedPost } from '../redux/actions/boardActions';
import { setRedirect } from '../redux/actions/historyActions';
import history from '../helpers/history';

function Post({ boardState: { selectedBoard }, setSelectedPost, postId })
{
   let [post, setPost] = useState(null);

   const redirect = () =>
   {
      history.push(`/${selectedBoard.name}/${post.title}`);
   }

   useEffect(() => 
   {
      if(selectedBoard && selectedBoard.posts)
      {
         setPost(selectedBoard.posts.find(post => post.id === postId));
      }
   });

   return (
      <Fragment>
         {post 
         ?  <Fragment>
               <div className="card card-body mb-5">
                  <button className="btn btn-link mb-2 card-title" onClick={redirect}><h3>{post.title}</h3></button>
                  <p className="card-text">{post.body}</p>
               </div>
            </Fragment>
         :  <h1>Loading Post...</h1>}
      </Fragment>
   );
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedBoard, setSelectedPost, setRedirect })(Post);